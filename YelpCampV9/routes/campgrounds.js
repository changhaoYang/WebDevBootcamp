var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");

//INDEX - show all campgrounds
router.get("/", function(req, res){
    //Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }
    });
});

//CREATE - add new campground to DB
router.post("/", isLoggedIn, function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var newCampground = {name: name, image: image, description: desc, author: author};
    //Create a new campground and save it to DB
    Campground.create(newCampground, function(err, newlyCreated) {
        if(err) {
            console.log(err);
        } else {
            //Redirect to the campgrounds page
            res.redirect("/campgrounds");  //错误："campgrounds/index"更正为"/campgrounds",redirect后面接上url，而不是页面
        }
    });

});

//NEW - show new form to create new campground
router.get("/new", isLoggedIn, function(req, res) {
    res.render("campgrounds/new"); 
});


//SHOW - show more info about one campground
router.get("/:id", function(req, res) {
    //Find the campground provided with ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
        if(err) {
            console.log(err);
        } else {
            //Render show page with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

//middleware
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;
