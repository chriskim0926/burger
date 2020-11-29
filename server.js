var express = require("express");
var methodOverride = require("method-override")
var bodyParser = require("body-parser");;

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));




// Set Handlebars.
var exphbs = require("express-handlebars");
const connection = require("./config/connection.js");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.put("/update", function(req, res) {
  connection.query('UPDATE burgers SET devoured = true WHERE id = ?;',[req.body.id],function(err,result){
    if(err) throw err;
    res.redirect('/');

  })

  });

app.listen(PORT, function() {
  console.log("App now listening http://localhost:" + PORT);
});
