const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const Listing = require("./models/listing.js");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema,reviewSchema } = require("./schema.js");
const Review = require("./models/review.js");

// ─── Constants ───────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 8080;
const MONGO_URL =
  "mongodb://127.0.0.1:27017/wanderlust" 
  // "mongodb+srv://zerodhaMayank:Mayankzerodha1122@cluster1.gxdexo5.mongodb.net/wanderlust";
//  "mongodb://127.0.0.1:27017/wanderlust";
// ─── DB Connection ────────────────────────────────────────────────────────────
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => {
    console.error("DB connection failed:", err);
    process.exit(1); // exit if DB is unreachable
  });

// ─── App Setup ────────────────────────────────────────────────────────────────
const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// ─── Routes ───────────────────────────────────────────────────────────────────

app.get("/", (req, res) => {
  res.send("Hi, I am root");
});



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

//joi middleware
//server side vlaidation for review

const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  console.log(error);
  if (error) {
    const errMsg = error.details.map((el) => el.message).join(", ");
    throw new ExpressError(400, errMsg);
  }
    next();
};



// Index
app.get(
  "/listings",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  }),
);

// New form — must be ABOVE /:id to avoid route conflict
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

// Show
app.get(
  "/listings/:id",
  wrapAsync(async (req, res, next) => {
    const listing = await Listing.findById(req.params.id).populate("reviews");
    res.render("listings/show.ejs", { listing });
  }),
);

// Create
app.post(
  "/listings", validateListing,
  wrapAsync(async (req, res, next) => {

    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
  }),
);

// Edit form
app.get(
  "/listings/:id/edit",
  wrapAsync(async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);
    res.render("listings/edit.ejs", { listing });
  }),
);

// Update
app.put(
  "/listings/:id",validateListing,
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
app.delete(
  "/listings/:id",
  wrapAsync(async (req, res, next) => {
    const deleted = await Listing.findByIdAndDelete(req.params.id);
    if (!deleted) return next(new Error("Listing not found"));
    res.redirect("/listings");
  }),
);




//Reviews 
//post  Review route

app.post("/listings/:id/reviews", validateReview,
  wrapAsync(async (req, res, next) => {
  let listing = await Listing.findById(req.params.id);
    let  newReview = new Review(req.body.review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
   res.redirect(`/listings/${listing._id}`)
  }));


// Delete Review Route
app.delete(
  "/listings/:id/reviews/:reviewId", wrapAsync(async(req,res) =>{
    let {id,reviewId } = req.params;
    await Listing.findByIdAndUpdate(id,{$pull: {reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
  })
);


// ─── Error Handler ────────────────────────────────────────────────────────────

//for all undefined pages error
app.all("*splat", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

// Single, proper error handler (you had two identical, broken ones)
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).render("error.ejs", { err });
  // res.status(statusCode).render("error.ejs", { err });
});

// ─── Server ───────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
