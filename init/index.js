const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"       
// "mongodb+srv://zerodhaMayank:Mayankzerodha1122@cluster1.gxdexo5.mongodb.net/wanderlust";

const initDB = async () => {
  await mongoose.connect(MONGO_URL);
  console.log("connected to DB");

  // Find and log any broken entry
  initdata.data.forEach((item, i) => {
    if (!item.title) console.log("Missing title at index:", i, item);
  });

  // Filter out broken entries
  const cleanData = initdata.data.filter(item => item.title);
  console.log("Total valid entries:", cleanData.length);

  await Listing.deleteMany({});
  await Listing.insertMany(cleanData);
  console.log("data was initialised");

  await mongoose.disconnect();
};

initDB().catch(console.error);