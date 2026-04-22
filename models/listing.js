const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required:true,

    },
    description:String,
    image: {
    filename: {
        type: String,
        default: "listingimage",
    },
    url: {
        type: String,
        default: "https://unsplash.com/photos/photo-of-brown-bench-near-swimming-pool-Koei_7yYtIo",
    },
   },
    price:Number,
    location:String, 
    country:String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;