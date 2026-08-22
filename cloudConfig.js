const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// fail fast if env vars missing, instead of silently running broken
if (
  !process.env.CLOUD_NAME ||
  !process.env.CLOUD_API_KEY ||
  !process.env.CLOUD_API_SECRET
) {
  throw new Error("Missing Cloudinary env vars. Check your .env file.");
}
// removed all console.log of secrets — was leaking API key/secret to logs

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "wanderlust_DEV",
    allowed_formats: ["jpeg", "png", "jpg", "webp"], // restrict upload types
  },
});

module.exports = {
  cloudinary,
  storage,
};
