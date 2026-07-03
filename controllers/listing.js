const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  };


module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showlisting = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id).populate({path:"reviews",populate:{
      path:"author",
    }, }).populate("Owner");
    if(!listing){
     req.flash("error","Requested Listing does not Exist!");
      return res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing });
  };

module.exports.createListing = async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    newListing.Owner =req.user._id;
    await newListing.save();
    req.flash("success","New Listing Created!");
    res.redirect("/listings");
  };

module.exports.renderEditForm = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);
    if(!listing){
     req.flash("error","Requested Listing does not Exist!");
      return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
  };


module.exports.updateListing = async (req, res, next) => {
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
    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
  };


module.exports.destroyListing = async (req, res, next) => {
    let {id} = req.params;
    let  deletedlisting = await Listing.findByIdAndDelete(id);
    console.log(deletedlisting)
    req.flash("success","Listing Deleted");
    res.redirect("/listings");
  };