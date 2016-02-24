var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/list');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var list = require("./routes/list.js")(app);
// var list = require("./routes/listNoDB.js")(app);

var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
