// Dependencies

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a model that matches up with DB
var Work = sequelize.define("work", {
  muscle: {
    type: Sequelize.STRING
  },
  workoutName: {
    type: Sequelize.STRING
  },
  userName: {
  type: Sequelize.STRING
},
  weight: {
    type: Sequelize.INTEGER
  },
  reps: {
    type: Sequelize.INTEGER
  },
  sets: {
    type: Sequelize.INTEGER
  },
}, {
  timestamps: true
});

// Syncs with DB
Work.sync();

module.exports = Work;















//original project 2
//CRUD method of creating functions that will interact with the database.


// Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");
//
// var lift = {
//   all: function(cb) {
//     orm.all("lift", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("lift", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("lift", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },
//   delete: function(condition, cb) {
//     orm.delete("lift", condition, function(res) {
//       cb(res);
//     });
//   }
// };
//
// // Export the database functions for the controller (catsController.js).
// module.exports = lift;
