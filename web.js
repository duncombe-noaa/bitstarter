
var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var buffer = fs.readFileSync('index.html');

var textstring = buffer.toString('utf8');

// console.log(textstring);

app.get('/', function(request, response) {
  // response.send('Hello World 2!');
  response.send(textstring);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
