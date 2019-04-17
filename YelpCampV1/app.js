var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true})); 
app.set("view engine", "ejs");
var campgrounds = [
        {name: "Salmon Creek", img: "https://cdn.shopify.com/s/files/1/2468/4011/products/campsite_1_600x.png?v=1524622915"},
        {name: "Granite Hill", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-24zB3c0xaSR3fruXr8VM_rhne5MGmVjYbVBKRZVnLgy4wAS"},
        {name: "Mountain Goat's Rest", img: "https://thumbnails.trvl-media.com/v2sRArMIcciDeWK1hgRK7Ynl4Mk=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/26000000/25120000/25115400/25115305/b0b7e6c3_z.jpg"},
        {name: "Salmon Creek", img: "https://cdn.shopify.com/s/files/1/2468/4011/products/campsite_1_600x.png?v=1524622915"},
        {name: "Granite Hill", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-24zB3c0xaSR3fruXr8VM_rhne5MGmVjYbVBKRZVnLgy4wAS"},
        {name: "Mountain Goat's Rest", img: "https://thumbnails.trvl-media.com/v2sRArMIcciDeWK1hgRK7Ynl4Mk=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/26000000/25120000/25115400/25115305/b0b7e6c3_z.jpg"},
        {name: "Salmon Creek", img: "https://cdn.shopify.com/s/files/1/2468/4011/products/campsite_1_600x.png?v=1524622915"},
        {name: "Granite Hill", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-24zB3c0xaSR3fruXr8VM_rhne5MGmVjYbVBKRZVnLgy4wAS"},
        {name: "Mountain Goat's Rest", img: "https://thumbnails.trvl-media.com/v2sRArMIcciDeWK1hgRK7Ynl4Mk=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/26000000/25120000/25115400/25115305/b0b7e6c3_z.jpg"}
    ]; 

app.get("/", function(req, res){
    res.render("landing");    
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, img: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started!");    
});