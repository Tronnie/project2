// api-routes.js - this file offers a set of routes for displaying and saving data to the db

// Dependencies
// =============================================================
var Work = require("../models/work.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all
  app.get("/api/all", function(req, res) {

    Work.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Get all workouts from a specific user
app.get("/api/user/:userName", function(req, res) {
  if (req.params.userName) {
    Work.findAll({
      where: {
        user: req.params.userName
      }
    }).then(function(results) {
      res.json(results);
    });
  }
});

  // Add a workout
  app.post("/api/new", function(req, res) {

    console.log("Work Data:");
    console.log(req.body);

    Work.create({
      workoutName: req.body.workoutName,
      muscle: req.body.muscle,
      userName: req.body.userName,
      weight: req.body.weight,
      reps: req.body.reps,
      sets: req.body.sets,
    }).then(function(results) {
      res.end();
    });

  });

};


























// orginal project2
//
// // Dependencies
// // =============================================================
// var connection = require("../config/connection.js");
//
//
// // Routes
// // =============================================================
// module.exports = function(app) {
//
//   // Get all chirps
//   app.get("/api/all", function(req, res) {
//
//     // var dbQuery = "SELECT * FROM project2_db.userinfo";
//     var dbQuery2 = "SELECT * FROM project2_db.userWorkout";
//
//     connection.query(dbQuery, function(err, result) {
//       res.json(result);
//     });
//
//   });
//
//   // Add a chirp
//   app.post("/api/new", function(req, res) {
//
//     console.log("Lift Data:");
//     console.log(req.body);
//
//     // var dbQuery = "INSERT INTO Lift (useName, password , userWeight) VALUES ('', 123, 760)";
//     var dbQuery2 = "INSERT INTO Lift (userName, excerciseName, weightAmount, repetitions,sets, totalReps, workoutTime) VALUES ('', 123, 760)";
//
//     connection.query(dbQuery2, [req.body.userName, req.body.excerciseName, req.body.weightAmount, req.body.repetitions, req.body.sets, req.body.totalReps, req.body.workoutTime], function(err, result) {
//       console.log("Lift Successfully Saved!");
//       res.end();
//     });
//
//   });
//
// };
