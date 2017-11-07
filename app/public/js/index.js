var userInput;


$("#submit-btn").on("click", function(event) {
  event.preventDefault();

  var newWorkout = {
    muscle: $("#muscle").val().trim(),
    workoutName: $("#workoutName").val().trim(),
    weight: $("#weight").val().trim(),
    reps: $("#reps").val().trim(),
    sets: $("#sets").val().trim(),
  };

  userInput = newWorkout;

  console.log('userInput', userInput);

  console.log('newWorkout', newWorkout);



      var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
            label: 'My Workout',
            data: [userInput.weight, userInput.reps, userInput.sets],
            backgroundColor: [
                'rgba(255, 99, 132, 0.1)',
                'rgba(54, 162, 235, 0.1)',
                
                'rgba(255, 159, 64, 0.2)'
            ],
            
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
            }]
        }
    }
});






  $.post("/api/new", newWorkout)
    
    .done(function() {

      var row = $("<div>");

      row.append("<p> muscle group: " + newWorkout.muscle + "</p>");
      row.append("<p> Workout name: " + newWorkout.workoutName + "</p>");
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
      row.append("<p> weight: " + data[i].weight + "</p>");
      row.append("<p> reps: " + data[i].reps + "</p>");
      row.append("<p> sets: " + data[i].sets + "</p>");
      row.append("<p> --------------- </p>");

      $("#work-area").prepend(row); 

    }

  }

});