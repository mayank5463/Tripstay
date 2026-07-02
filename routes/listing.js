const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");

//joi middleware
//server side validation for listing
const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  console.log(error);
  if (error) {
    const errMsg = error.details.map((el) => el.message).join(", ");
    throw new ExpressError(400, errMsg);
  }
  next();
};

// Index
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  }),
);

// New form — must be ABOVE /:id to avoid route conflict
router.get("/new", (req, res) => {
  res.render("listings/new.ejs");
});

// Show
router.get(
  "/:id",
  wrapAsync(async (req, res, next) => {
    const listing = await Listing.findById(req.params.id).populate("reviews");
    res.render("listings/show.ejs", { listing });
  }),
);

// Create
router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
  }),
);

// Edit form
router.get(
  "/:id/edit",
  wrapAsync(async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);
    res.render("listings/edit.ejs", { listing });
  }),
);

// Update
router.put(
  "/:id",
  validateListing,
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    const existing = await Listing.findById(id);

    if (!existing) {
      throw new ExpressError(400, "Listing not found");
    }

    const updateData = { ...req.body.listing };

    updateData.image = {
      url: req.body.listing.image?.url || existing.image.url,
      filename: req.body.listing.image?.filename || existing.image.filename,
    };

    const listing = await Listing.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    res.redirect(`/listings/${id}`);
  }),
);

// Delete
router.delete(
  "/:id",
  wrapAsync(async (req, res, next) => {
    const deleted = await Listing.findByIdAndDelete(req.params.id);
    if (!deleted) return next(new Error("Listing not found"));
    res.redirect("/listings");
  }),
);

module.exports = router;
