require("dotenv").config();
const mongoose = require("mongoose");
const Listing = require("./models/listing");

mongoose.connect(process.env.MONGO_URL).then(async () => {
  const result = await Listing.deleteMany({ owner: { $exists: false } });
  console.log(`Deleted ${result.deletedCount} listings with no owner`);
  mongoose.disconnect();
});