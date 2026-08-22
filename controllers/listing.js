
const Listing = require("../models/listing");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const ExpressError = require("../utils/ExpressError.js");

const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showlisting = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner"); // FIXED: was "Owner" (capital O) — didn't match the
                         // schema field name, so populate silently did nothing
                         // and listing.owner stayed undefined.
  if (!listing) {
    req.flash("error", "Requested Listing does not Exist!");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  // Geocode the entered location first.
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();

  // FIXED: forwardGeocode can legitimately return zero features for a
  // location it can't resolve (typo, gibberish, non-existent place). We used
  // to blindly index [0] and crash with "Cannot read properties of undefined".
  // Fail gracefully and send the user back to fix the location instead.
  const feature = response.body.features && response.body.features[0];
  if (!feature) {
    req.flash("error", "We couldn't find that location. Please enter a more specific address or place name.");
    return res.redirect("/listings/new");
  }

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id; // FIXED: was "Owner" (capital O). Mongoose
                                    // schemas by default only persist fields
                                    // defined in the schema — since the
                                    // schema field is (lowercase) "owner",
                                    // setting .Owner assigned a property that
                                    // Mongoose silently dropped on save,
                                    // leaving every listing's real owner
                                    // field empty.
  newListing.geometry = feature.geometry;

  // FIXED: previously read req.file.path / req.file.filename unconditionally
  // ABOVE this point, before ever checking req.file existed — that crashed
  // the server ("Cannot read properties of undefined (reading 'path')")
  // any time a listing was submitted without an image. The image is now set
  // exactly once, only when a file was actually uploaded. If your form
  // requires an image, keep that enforced client-side / in the model; this
  // just stops the server from dying if it isn't.
  if (req.file) {
    newListing.image = {
      url: req.file.path,
      filename: req.file.filename,
    };
  }

  await newListing.save();

  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    req.flash("error", "Requested Listing does not Exist!");
    return res.redirect("/listings");
  }

  // FIXED: String.prototype.replace() does not mutate the original string —
  // the old code called .replace(...) and discarded the result, so the crop
  // transform never actually applied and originalImageUrl was just the raw
  // URL every time. Also fixed the Cloudinary transform syntax itself:
  // "/upload/,w_250" (leading comma, no width segment closed) isn't a valid
  // Cloudinary transformation — it should be "/upload/w_250/".
  let originalImageUrl = listing.image.url.replace("/upload/", "/upload/w_250/");

  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res, next) => {
  let { id } = req.params;

  // Re-geocode the location so edited listings get updated coordinates.
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();

  // FIXED: same empty-results guard as createListing — an unresolvable
  // location used to crash the request here too.
  const feature = response.body.features && response.body.features[0];
  if (!feature) {
    req.flash("error", "We couldn't find that location. Please enter a more specific address or place name.");
    return res.redirect(`/listings/${id}/edit`);
  }

  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  // FIXED: findByIdAndUpdate returns null if the id doesn't match any
  // document (deleted between page load and submit, bad id, etc.) — the
  // old code went straight to listing.image = ... and would crash with
  // "Cannot set properties of null".
  if (!listing) {
    req.flash("error", "Requested Listing does not Exist!");
    return res.redirect("/listings");
  }

  if (req.file) {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
  }

  listing.geometry = feature.geometry;
  await listing.save();

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res, next) => {
  let { id } = req.params;
  let deletedlisting = await Listing.findByIdAndDelete(id);
  if (!deletedlisting) {
    req.flash("error", "Requested Listing does not Exist!");
    return res.redirect("/listings");
  }
  req.flash("success", "Listing Deleted");
  res.redirect("/listings");
};

// ── NEW: powers the navbar's city typeahead ──────────────────────────────
// Aggregates distinct cities with their country and how many listings sit
// in each, sorted most-listings-first so the navbar can show a sensible
// "Popular destinations" list on focus, before the user types anything.
//
// IMPORTANT: in routes/listing.js, register this ABOVE any "/:id" route
// (e.g. router.get("/:id", listingController.showlisting)):
//
//   router.get("/api/cities", listingController.cityIndex);
//
// Otherwise Express matches "/listings/api/cities" against "/:id" first,
// treats "api" as an id, and this route never gets hit.
module.exports.cityIndex = async (req, res) => {
  const cities = await Listing.aggregate([
    { $group: { _id: "$location", country: { $first: "$country" }, count: { $sum: 1 } } },
    { $project: { _id: 0, location: "$_id", country: 1, count: 1 } },
    { $sort: { count: -1 } },
  ]);
  res.json(cities);
};