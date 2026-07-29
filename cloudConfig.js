const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Debug environment variables
console.log("========== CLOUDINARY CONFIG ==========");
console.log("CLOUD_NAME:", process.env.CLOUD_NAME);
console.log("CLOUD_API_KEY:", process.env.CLOUD_API_KEY);
console.log(
  "CLOUD_API_SECRET:",
  process.env.CLOUD_API_SECRET ? "Present" : "Missing"
);
console.log("======================================");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "wanderlust_DEV",
  },
});

module.exports = {
  cloudinary,
  storage,
};