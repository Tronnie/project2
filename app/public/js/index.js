
$("#submit-btn").on("click", function(event) {
  event.preventDefault();

  var newWorkout = {
    muscle: $("#muscle").val().trim(),
    workoutName: $("#workoutName").val().trim(),
  // userName: $("#userName").val().trim(),
    weight: $("#weight").val().trim(),
    reps: $("#reps").val().trim(),
    sets: $("#sets").val().trim(),
  };

  console.log(newWorkout);

  $.post("/api/new", newWorkout)

    .done(function() {

      var row = $("<div>");

      row.append("<p> muscle group: " + newWorkout.muscle + "</p>");
      row.append("<p> Workout name: " + newWorkout.workoutName + "</p>");
// row.append("<p> User: " + newWorkout.userName + "</p>");
      row.append("<p> weight: " + newWorkout.weight + "</p>");
      row.append("<p> reps: " + newWorkout.reps + "</p>");
      row.append("<p> sets: " + newWorkout.sets + "</p>");
      row.append("<p> --------------- </p>");

      $("#work-area").prepend(row);
      newWorkout = {};

    });

  // Empty each input box by replacing the value with an empty string

  $("#muscle").val("");
  $(".workoutName").val("");
// $("#userName").val("");
  $("#weight").val("");
  $("#reps").val("");
  $("#sets").val("");
});

$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");

      row.append("<p> muscle group: " + data[i].muscle + "</p>");
      row.append("<p> workout name: " + data[i].workoutName + "</p>");
    // row.append("<p> User Name: " + data[i].userName + "</p>");
      row.append("<p> weight: " + data[i].weight + "</p>");
      row.append("<p> reps: " + data[i].reps + "</p>");
      row.append("<p> sets: " + data[i].sets + "</p>");
      row.append("<p> --------------- </p>");

      $("#work-area").prepend(row);

    }

  }

});
