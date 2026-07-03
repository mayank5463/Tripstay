const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");
const Listing = require("../models/listing.js"); 



// Index
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  }),
);

// New form — must be ABOVE /:id to avoid route conflict
router.get("/new",isLoggedIn, (req, res) => {
  res.render("listings/new.ejs");
});

// Show
router.get(
  "/:id",
  wrapAsync(async (req, res, next) => {
    const listing = await Listing.findById(req.params.id).populate({path:"reviews",populate:{
      path:"author",
    }, }).populate("Owner");
    if(!listing){
     req.flash("error","Requested Listing does not Exist!");
      return res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing });
  }),
);

// Create
router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    newListing.Owner =req.user._id;
    await newListing.save();
    req.flash("success","New Listing Created!");
    res.redirect("/listings");
  }),
);

// Edit form
router.get(
  "/:id/edit",isLoggedIn,isOwner,
  wrapAsync(async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);
    if(!listing){
     req.flash("error","Requested Listing does not Exist!");
      return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
  }),
);

// Update
router.put(
  "/:id",isLoggedIn,isOwner,
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
    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
  }),
);

// Delete
router.delete(
  "/:id",isLoggedIn,isOwner,
  wrapAsync(async (req, res, next) => {
    let {id} = req.params;
    let  deletedlisting = await Listing.findByIdAndDelete(id);
    console.log(deletedlisting)
    req.flash("success","Listing Deleted");
    res.redirect("/listings");
  }),
);

module.exports = router;
