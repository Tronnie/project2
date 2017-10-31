//CRUD method of creating functions that will interact with the database.


// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var lift = {
  all: function(cb) {
    orm.all("lift", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("lift", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("lift", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("lift", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = lift;
