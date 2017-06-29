// index.js
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.post('/products', function(req, res){
  //req.body is all the into coming in from the form-group
  // we need to get name, color, price... out of req.body
  var name = req.body.name ;
  var color = req.body.color;
  var price = req.body.price;

  var product = {name: name, color: color, price:price};

  res.json(product);
});

app.listen(3000, function(){
  console.log("listening on port 3000");
});


app.post('/fish', function(req, res){

  var type = req.body.type;
  var length = req.body.length;
  var color = req.body.color;

  var fish = {type: type, length: length, color: color};

  res.json(fish);
})
// req -> request
// res -> response
