const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");
const Listing = require("../models/listing.js"); 
const listingController = require("../controllers/listing.js");


// Index
router.get(
  "/",
  wrapAsync(listingController.index),
);

// New form — must be ABOVE /:id to avoid route conflict
router.get("/new",isLoggedIn, listingController.renderNewForm);

// Show
router.get(
  "/:id",
  wrapAsync(listingController.showlisting),
);

// Create
router.post(
  "/",
  validateListing,
  wrapAsync(listingController.createListing),
);

// Edit form
router.get(
  "/:id/edit",isLoggedIn,isOwner,
  wrapAsync(listingController.renderEditForm),
);

// Update
router.put(
  "/:id",isLoggedIn,isOwner,
  validateListing,
  wrapAsync(listingController.updateListing),
);

// Delete
router.delete(
  "/:id",isLoggedIn,isOwner,
  wrapAsync(listingController.destroyListing),
);

module.exports = router;
