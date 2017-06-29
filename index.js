//if you create your own module, you have to be path specific. You have to
//go to the exact path it comes from.

var express = require('express');
var bodyParser = require('body-parser');
var makeDate = require('./dateMaker');
var app = express();

console.log(makeDate(10));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

var instagrams = [
  { title: "My Dog", date: makeDate(10), img: "http://www.jpost.com/HttpHandlers/ShowImage.ashx?id=331766" },
  { title: "Also my Dog", date: makeDate(8), img: "https://s-media-cache-ak0.pinimg.com/736x/91/32/c1/9132c1c095da3369c552d8e9b3afbcae.jpg" },
  { title: "Not my dog", date: makeDate(7), img: "http://barkingroyalty.com/wp-content/uploads/2015/12/Beagle-puppy.jpg?x30644" },
]

app.use(express.static(__dirname + "/public"));

app.get("/instagrams", function(req,res){
  res.json({message:"Found data", data: instagrams });
});

app.post("/instagrams", function(req,res){

  var newGram = {title: req.body.title, img: req.body.image, date: makeDate(0)};
  instagrams.push(newGram);
  res.json({message: "Post Success", data: instagrams });
});

var server = app.listen(3002, function(){
  console.log("Listneing on port 3002");
});
