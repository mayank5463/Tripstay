const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");


const listings = require("./routes/listing.js");
const reviews= require("./routes/reviews.js");
const session = require("express-session");
const flash = require("connect-flash");

// ─── Constants ───────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 8080;
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
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


const  sessionOptions = {
  secret:"mysupersecretcode",
  resave:false,
  saveUninitialized:true,
  cookie:{
    expires:Date.now() + 7*24*60*60*1000,
    maxAge:7*24*60*60*1000,
    httpOnly:true,
  },
};

app.use(session(sessionOptions));
app.use(flash());



// ─── Routes ───────────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.send("Hi, I am root");
});


app.use("/listings", listings);
app.use("/listings/:id/reviews",reviews);

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
