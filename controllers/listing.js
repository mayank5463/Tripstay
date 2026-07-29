const Listing = require("../models/listing");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

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
    .populate("Owner");
  if (!listing) {
    req.flash("error", "Requested Listing does not Exist!");
    return res.redirect("/listings");
  }
  console.log(listing);
  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();

  // res.send("done!");

  console.log("4. Controller Started");

  let url = req.file.path;
  let filename = req.file.filename;
  console.log(url, "..", filename);
  console.log("5. Listing Object Created");


  const newListing = new Listing(req.body.listing);

  newListing.Owner = req.user._id;
  console.log("6. Owner Added");

  newListing.image = { url, filename };
  console.log(url, filename);
  
  newListing.geometry = response.body.features[0].geometry;

  if (req.file) {
    newListing.image = {
      url: req.file.path,
      filename: req.file.filename,
    };
    console.log("7. Image Added");
  }

  console.log("8. Before Save");

  let savedListing = await newListing.save();
  console.log(savedListing);
  console.log("9. After Save");

  req.flash("success", "New Listing Created!");

  console.log("10. Before Redirect");

  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    req.flash("error", "Requested Listing does not Exist!");
    return res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl.replace("/upload", "/upload/,w_250");

  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

// module.exports.updateListing = async (req, res, next) => {
//   let { id } = req.params;
//   let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
//   if (typeof req.file !== "undefined") {
//     let url = req.file.path;
//     console.log("url:-", url);
//     let filename = req.file.filename;
//     console.log("filename:-", filename);
//     listing.image = { url, filename };
//     await listing.save();
//     console.log("edited succ.");
//   }
//   req.flash("success", "Listing Updated!");
//   res.redirect(`/listings/${id}`);
// };


module.exports.updateListing = async (req, res, next) => {
  let { id } = req.params;

  // ============================================
  // NEW: Re-geocode the location so edited/older listings get updated coordinates
  // ============================================
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();

  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    console.log("url:-", url);
    let filename = req.file.filename;
    console.log("filename:-", filename);
    listing.image = { url, filename };
    await listing.save();
    console.log("edited succ.");
  }

  // ============================================
  // NEW: Save the freshly geocoded coordinates onto the listing
  // (Placed after the image-update block so it runs regardless of
  // whether a new image was uploaded or not — old listings without
  // geometry will now get it added the moment they're edited)
  // ============================================
  listing.geometry = response.body.features[0].geometry;
  await listing.save();

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};




module.exports.destroyListing = async (req, res, next) => {
  let { id } = req.params;
  let deletedlisting = await Listing.findByIdAndDelete(id);
  console.log(deletedlisting);
  req.flash("success", "Listing Deleted");
  res.redirect("/listings");
};
