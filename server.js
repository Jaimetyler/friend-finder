var express = require ("express");
var path = require ("path");
var app = express();
// var bodyParser = require ("body-parser");

var PORT = process.env.PORT || 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(bodyParser.json({ type: 'application/*+json'}));
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}));


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });