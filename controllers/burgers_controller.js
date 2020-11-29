const express = require("express");
const burger = require("../models/burger.js");

var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.burger_name
    ], function() {
      res.redirect("/");
    });
  });

  module.exports = router;

