const mongoose = require("mongoose");
const initdata = require("./data.js");       // Raw seed data (array of listing objects)
const Listing = require("../models/listing.js"); // Mongoose model/schema for listings

// ---------------------------------------------------------------------------
// DATABASE CONNECTION STRING
// ---------------------------------------------------------------------------
// Local MongoDB instance (default port 27017), database name "wanderlust".
// The Atlas (cloud) connection string is commented out — never commit real
// credentials to source control. If you need Atlas, load it from an
// environment variable instead (see note at the end).
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
// "mongodb+srv://zerodhaMayank:Mayankzerodha1122@cluster1.gxdexo5.mongodb.net/wanderlust";

// ---------------------------------------------------------------------------
// FIXED OWNER ID
// ---------------------------------------------------------------------------
// Every listing in this seed batch will be assigned to the same "owner"
// (i.e., the user who supposedly created/listed it). This is presumably a
// real user's ObjectId already present in your "users" collection.
// Mongoose will cast this string to a proper ObjectId automatically when
// inserting, as long as your Listing schema defines `owner` as:
//   owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
const OWNER_ID = "6a46dfd13f4d5fd72564b7e6";

const initDB = async () => {
  // Step 1: Connect to MongoDB via Mongoose.
  await mongoose.connect(MONGO_URL);
  console.log("connected to DB");

  // Step 2: Validate raw data BEFORE touching the database.
  // We check every entry for a `title` field and log the index/content
  // of any that are missing one, so you can go fix data.js if needed.
  initdata.data.forEach((item, i) => {
    if (!item.title) console.log("Missing title at index:", i, item);
  });

  // Step 3: Build the clean, insert-ready dataset.
  // - Filter out any entries without a title (invalid/broken records).
  // - Attach the same `owner` field to every remaining entry using the
  //   spread operator, so the original item's fields are preserved and
  //   `owner` is added/overwritten on top.
  const cleanData = initdata.data
    .filter(item => item.title)
    .map(item => ({
      ...item,
      Owner: OWNER_ID,
    }));

  console.log("Total valid entries:", cleanData.length);

  // Step 4: Guard clause — don't wipe the collection if there's nothing
  // valid to reinsert. Prevents accidentally emptying the DB on bad data.
  if (cleanData.length === 0) {
    console.log("No valid data to insert. Aborting before deleteMany.");
    await mongoose.disconnect();
    return;
  }

  // Step 5: Clear existing listings, then bulk-insert the fresh seed data.
  // deleteMany({}) with an empty filter removes ALL documents in the
  // collection — this script is meant to fully reset the listings table
  // each time it runs (typical for a seed/init script).
  await Listing.deleteMany({});
  await Listing.insertMany(cleanData);
  console.log("data was initialised");

  // Step 6: Cleanly close the DB connection so the Node process can exit.
  await mongoose.disconnect();
};

// Run the whole init routine. Any error thrown anywhere inside initDB
// (connection failure, validation error from Mongoose, etc.) is caught
// here and printed instead of crashing silently.
initDB().catch(console.error);