var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true})); 
app.set("view engine", "ejs"); 

//Schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name: "Granite Hill", 
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-24zB3c0xaSR3fruXr8VM_rhne5MGmVjYbVBKRZVnLgy4wAS", 
//     description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
// }, function(err, campground) {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(campground);
//     }
// });

app.get("/", function(req, res){
    res.render("landing");    
});

//INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
    //Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    });
});

//CREATE - add new campground to DB
app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    //Create a new campground and save it to DB
    Campground.create(newCampground, function(err, newlyCreated) {
        if(err) {
            console.log(err);
        } else {
            //Redirect to the campgrounds page
            res.redirect("/campgrounds");
        }
    });

});

//NEW - show new form to create new campground
app.get("/campgrounds/new", function(req, res) {
    res.render("new"); 
});

//SHOW - show more info about one campground
app.get("/campgrounds/:id", function(req, res) {
    //Find the campground provided with ID
    Campground.findById(req.params.id, function(err, foundCampground) {
        if(err) {
            console.log(err);
        } else {
            //Render show page with that campground
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started!");    
});