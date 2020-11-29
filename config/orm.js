// * `selectAll()`
// * `insertOne()`
// * `updateOne()`
const connection = require("../config/connection.js");

var orm = {
    all: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO " + table;
    //   INSERT INTO burgers (burger_name) VALUES ('Vegi Burger');
  
      queryString += " (burger_name) VALUES (";
      queryString += "'";
      queryString += vals;
      queryString += "'";
      queryString += ");";

  
      console.log(queryString);
  
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    update: function(table, objColVals, condition, cb) {
        // UPDATE burgers SET devoured = true WHERE id = 16;
     
      var queryString = "UPDATE burgers SET devoured = true WHERE "+ condition + ";";
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
  };
  

  module.exports = orm;
  
