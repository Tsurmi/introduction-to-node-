var express = require('express');
var bodyParser = require('body-parser');
var app = express();

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
