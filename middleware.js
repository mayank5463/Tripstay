const Listing = require("./models/listing");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema,reviewSchema } = require("./schema.js");
const Review = require("./models/review");




 
module.exports.isLoggedIn = (req,res,next)=>{

 if(!req.isAuthenticated()){
   req.session.redirectUrl = req.originalUrl;
    req.flash("error","You must be logged in to create Listing");
    console.log("1. Passed login");
   return  res.redirect("/login");
  }
  next();
};


module.exports.saveRedirectUrl =(req,res,next) =>{
   if(req.session.redirectUrl){
      res.locals.redirectUrl=req.session.redirectUrl;

   }
   next();
};


module.exports.isOwner = async (req,res,next) =>{
    let { id } = req.params;
       let listing = await Listing.findById(id);
       if(!listing.Owner.equals(res.locals.currUser._id)){
         req.flash("error","You dont have permission to edit");
         return res.redirect(`/listings/${id}`);
       }

      next();
};



//joi middleware
//server side validation for listing
module.exports.validateListing = (req, res, next) => {
  console.log("BODY =", req.body);
  console.log("FILE =", req.file);

  const { error } = listingSchema.validate(req.body);

  console.log("JOI ERROR =", error);
  

  if (error) {
    const errMsg = error.details.map((el) => el.message).join(", ");
    throw new ExpressError(400, errMsg);
  }
  console.log("3. Passed Validation");

  next();
};


//joi middleware
//server side vlaidation for review
module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  console.log(error);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(", ");
    throw new ExpressError(400, errMsg);
  }
  next();
};


module.exports.isReviewAuthor = async (req,res,next) =>{
    let { id,reviewId } = req.params;
       let review = await Review.findById(reviewId);
       if(!review.author.equals(res.locals.currUser._id)){
         req.flash("error","You are not the Author of this Review");
         return res.redirect(`/listings/${id}`);
       }

      next();
};
