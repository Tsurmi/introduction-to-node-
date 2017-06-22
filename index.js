// index.js
var express = require('express');
var app = express();

app.get('/greeting', function(req, res){
  res.send("How are you!")
// req -> request
// res -> response

});
app.get('/salutations', function(req, res){
  res.send("HELL YAH!")
});
app.listen(3000, function(){
  console.log('Listening on port 3000');
});
