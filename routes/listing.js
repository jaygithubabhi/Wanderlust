const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const Listing=require("../models/listing");
const ExpressError =require("../utils/ExpressError.js");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");
const listingController=require("../controllers/listing.js");
const {storage}=require("../cloudConfig.js");
const multer  = require('multer')
const upload = multer({storage})


router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,validateListing,upload.single("listing[image]"),wrapAsync(listingController.createListing))

//new route
router.get("/new",isLoggedIn,listingController.renderNewForm);

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,upload.single("listing[image]"),wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing))

//index route
// router.get("/",wrapAsync(listingController.index));

//new route
// router.get("/new",isLoggedIn,listingController.renderNewForm);


//show route
// router.get("/:id",wrapAsync(listingController.showListing));

//create route
// router.post("/",isLoggedIn,wrapAsync(listingController.createListing))

//edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm))

//update route
// router.put("/:id",isLoggedIn,isOwner,wrapAsync(listingController.updateListing))

//delete route
// router.delete("/:id",isLoggedIn,isOwner,wrapAsync(listingController.destroyListing))

module.exports=router;