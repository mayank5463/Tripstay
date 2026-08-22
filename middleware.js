// const Listing = require("./models/listing");
// const ExpressError = require("./utils/ExpressError.js");
// const { listingSchema, reviewSchema } = require("./schema.js");
// const Review = require("./models/review");

// module.exports.isLoggedIn = (req, res, next) => {
//   if (!req.isAuthenticated()) {
//     req.session.redirectUrl = req.originalUrl;
//     req.flash("error", "You must be logged in to create Listing");
//     return res.redirect("/login");
//   }
//   next();
// };

// module.exports.saveRedirectUrl = (req, res, next) => {
//   if (req.session.redirectUrl) {
//     res.locals.redirectUrl = req.session.redirectUrl;
//   }
//   next();
// };

// module.exports.isOwner = async (req, res, next) => {
//   let { id } = req.params;
//   let listing = await Listing.findById(id);
//   // added: null check, was crashing server on bad/deleted id
//   if (!listing) {
//     req.flash("error", "Listing not found");
//     return res.redirect("/listings");
//   }
//   if (!listing.Owner || !listing.Owner.equals(res.locals.currUser._id)) {
//     req.flash("error", "You dont have permission to edit");
//     return res.redirect(`/listings/${id}`);
//   }
//   next();
// };

// // joi middleware
// // server side validation for listing
// module.exports.validateListing = (req, res, next) => {
//   // removed debug console.log(req.body) / console.log(req.file) — was leaking user input to logs
//   const { error } = listingSchema.validate(req.body);
//   if (error) {
//     const errMsg = error.details.map((el) => el.message).join(", ");
//     throw new ExpressError(400, errMsg);
//   }
//   next();
// };

// // joi middleware
// // server side validation for review
// module.exports.validateReview = (req, res, next) => {
//   let { error } = reviewSchema.validate(req.body);
//   if (error) {
//     let errMsg = error.details.map((el) => el.message).join(", ");
//     throw new ExpressError(400, errMsg);
//   }
//   next();
// };

// module.exports.isReviewAuthor = async (req, res, next) => {
//   let { id, reviewId } = req.params;
//   let review = await Review.findById(reviewId);
//   // added: null check, was crashing server on bad/deleted reviewId
//   if (!review) {
//     req.flash("error", "Review not found");
//     return res.redirect(`/listings/${id}`);
//   }
//   if (!review.author || !review.author.equals(res.locals.currUser._id)) {
//     req.flash("error", "You are not the Author of this Review");
//     return res.redirect(`/listings/${id}`);
//   }
//   next();
// };



const Listing = require("./models/listing");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const Review = require("./models/review");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in to create Listing");
    return res.redirect("/login");
  }
  next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  // added: null check, was crashing server on bad/deleted id
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }
  // FIXED: was listing.Owner (capital O) — didn't match the schema field
  // name "owner" (lowercase), so this check was always failing (owner was
  // always undefined), meaning isOwner would ALWAYS redirect with "no
  // permission" even for the actual owner.
  if (!listing.owner || !listing.owner.equals(res.locals.currUser._id)) {
    req.flash("error", "You dont have permission to edit");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

// joi middleware
// server side validation for listing
module.exports.validateListing = (req, res, next) => {
  // removed debug console.log(req.body) / console.log(req.file) — was leaking user input to logs
  const { error } = listingSchema.validate(req.body);
  if (error) {
    const errMsg = error.details.map((el) => el.message).join(", ");
    throw new ExpressError(400, errMsg);
  }
  next();
};

// joi middleware
// server side validation for review
module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(", ");
    throw new ExpressError(400, errMsg);
  }
  next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  // added: null check, was crashing server on bad/deleted reviewId
  if (!review) {
    req.flash("error", "Review not found");
    return res.redirect(`/listings/${id}`);
  }
  if (!review.author || !review.author.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not the Author of this Review");
    return res.redirect(`/listings/${id}`);
  }
  next();
};