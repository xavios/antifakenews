var express = require('express');
var app = express();

app.get('/hello-world', function (req, res) {
   res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ "hello": "world" }, null, 3));
})

var server = app.listen(80, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})