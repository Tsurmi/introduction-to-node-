//if you create your own module, you have to be path specific. You have to
//go to the exact path it comes from.

var express = require('express');
var bodyParser = require('body-parser');
var makeDate = require('./dateMaker');
var app = express();

console.log(makeDate(10));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.get("/instagrams", function(req,res){
  res.send("Hi!");
});

app.post("/instagrams", function(req,res){
  res.send("Hello from Post!");
});

var server = app.listen(3002, function(){
  console.log("Listneing on port 3002");
});
