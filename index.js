// index.js
var express = require('express');
var app = express();

app.get('/greeting', function(req, res){
  res.send("How are you!")

});

// app.get('/greeting/:name', function(req, res){
//   var yourName = req.params.name;
//   res.send("nice to meet you " + yourName);
// });

app.get('/salutations', function(req, res){
  res.send("HELL YAH!")
});

app.get('/greeting/:color', function(req, res){
  var yourColor = req.params.color;
  res.send("Your color is " + yourColor)
})
app.listen(3000, function(){
  console.log("listening on port 3000");
});

// req -> request
// res -> response
