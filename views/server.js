// Require dependencies
var express = require("express");;

// Setup our port to be 3000
var PORT = process.env.PORT || 3000;

// Instantiate our Express App
var app = express();

// Setup an Express Router
var router = express.Router();

// Designate our public folder as a static directory
app.use(express.static(_dirname + "/public"));

// Have every request go through router middleware
app.use(router);

// Listen on the port
app.listen(PORT, function() {
    console.log("Listening on port:" + PORT);
});