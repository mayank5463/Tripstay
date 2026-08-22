require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const { MongoStore } = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const sanitizeInputs = require("./utils/sanitize.js");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/reviews.js");
const userRouter = require("./routes/user.js");

const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;
const SESSION_SECRET = process.env.SESSION_SECRET;
const NODE_ENV = process.env.NODE_ENV || "development";

if (!MONGO_URL || !SESSION_SECRET) {
  console.error(
    "Missing MONGO_URL or SESSION_SECRET in .env — refusing to start.",
  );
  process.exit(1);
}

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => {
    console.error("DB connection failed:", err.message);
    process.exit(1);
  });

const app = express();

app.set("trust proxy", 1);

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "https://cdnjs.cloudflare.com",
          "https://cdn.jsdelivr.net",
          "https://api.mapbox.com",
          "'unsafe-inline'",
        ],
        styleSrc: [
          "'self'",
          "https://cdnjs.cloudflare.com",
          "https://cdn.jsdelivr.net",
          "https://fonts.googleapis.com",
          "https://api.mapbox.com",
          "'unsafe-inline'",
        ],
        fontSrc: [
          "'self'",
          "https://fonts.gstatic.com",
          "https://cdnjs.cloudflare.com",
        ],
        imgSrc: [
          "'self'",
          "data:",
          "https://res.cloudinary.com",
          "https://images.unsplash.com",
          "https://api.mapbox.com",
        ],
        connectSrc: [
          "'self'",
          "https://api.mapbox.com",
          "https://events.mapbox.com",
          "https://cdn.jsdelivr.net",
        ],
        workerSrc: ["'self'", "blob:"],
        childSrc: ["blob:"],
      },
    },
  }),
);

app.use(sanitizeInputs);

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: "Too many attempts. Please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});

const sessionOptions = {
  store: MongoStore.create({
    mongoUrl: MONGO_URL,
    touchAfter: 24 * 3600,
  }),
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: NODE_ENV === "production",
    sameSite: "lax",
  },
};
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

app.get("/", (req, res) => {
  res.redirect("/listings");
});

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/login", authLimiter);
app.use("/signup", authLimiter);
app.use("/", userRouter);

app.all("/*splat", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  if (NODE_ENV !== "production") console.error(err);
  res.status(statusCode).render("error.ejs", { statusCode, message });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} [${NODE_ENV}]`);
});