const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const Listing = require("../models/listing.js");
const listingController = require("../controllers/listing.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });





//search feture 
router.get("/search", async (req, res) => {
  const { city } = req.query;

  console.log(req.query);
  console.log(req.query.city);

  const allListings = city
    ? await Listing.find({
        location: { $regex: city, $options: "i" }
      })
    : await Listing.find({});

  res.render("listings/index.ejs", {
    allListings,
    city,
  });
});



//category
router.get("/category/:category", async (req, res) => {
  const { category } = req.params;

  const allListings = await Listing.find({
    category: category,
  });

  res.render("listings/category.ejs", {
    allListings,
    category,
  });
});


// Index
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    validateListing,
    upload.single("listing[image]"),
    (req, res, next) => {
      console.log("2. Passed Multer");
      next();
    },
    wrapAsync(listingController.createListing),
  );

// New form — must be ABOVE /:id to avoid route conflict
router.get("/new", isLoggedIn, listingController.renderNewForm);

// ============================================
// MOVED HERE: map-data route — must be ABOVE /:id
// FIXED PATH: "/map-data" not "/listings/map-data"
// (this file is already mounted at /listings in app.js)
// ============================================
router.get("/map-data", async (req, res) => {
  const listings = await Listing.find({ geometry: { $exists: true } });

  const geoJSON = {
    type: "FeatureCollection",
    features: listings.map((listing) => ({
      type: "Feature",
      geometry: listing.geometry,
      properties: {
        id: listing._id,
        title: listing.title,
        price: listing.price,
        location: listing.location,
        image: listing.image.url,
      },
    })),
  };

  res.json(geoJSON);
});

router
  .route("/:id")
  .get(wrapAsync(listingController.showlisting))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.updateListing),
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// Edit form
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm),
);

module.exports = router;