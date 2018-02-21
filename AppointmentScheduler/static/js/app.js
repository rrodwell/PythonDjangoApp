
// Initial Values
var name = "";
var role = "";
var startDate = "";
var monthlyRate = "";
var totalBilled = "";
var numMonths = "";

// Capture Button Click
$("#submit-btn").on("click", function(event) {
  console.log("done");
  event.preventDefault();

  // Grabbed values from text boxes
  name = $("#name-employee").val().trim();
  role = $("#role").val().trim();
  startDate = $("#start-date").val().trim();
  monthlyRate = $("#monthly-rate").val().trim();

  $("name-employee").val("");
  $("role").val("");
  $("start-date").val("");
  $("monthly-rate").val("");

  // Code for handling the push
  database.ref().push({
    name: name,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });

});

$("#add-appt").on("click", function() {

  $("#add-appt").css("display", "none");
  $("#appt-form").css("display","block");
  $("#add-btn").css("display","inline-block");
  $("#cancel-btn").css("display","inline-block");

});

$("#cancel-btn").on("click", function() {

  $("#add-appt").css("display", "inline-block");
  $("#appt-form").css("display","none");
  $("#add-btn").css("display","none");
  $("#cancel-btn").css("display","none");

});


// // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
// database.ref().on("child_added", function(childSnapshot) {

//   // Log everything that's coming out of snapshot
//   //console.log(childSnapshot.val().name);
//   //console.log(childSnapshot.val().role);
//   //console.log(childSnapshot.val().startDate);
//   //console.log(childSnapshot.val().monthlyRate);

//   //Start date math
//   numMonths = (moment().diff(moment(childSnapshot.val().startDate), 'months'));
//   console.log(numMonths);

//   totalBilled = numMonths * childSnapshot.val().monthlyRate;


//   var tableRow = $("<tr>");
//   tableRow.attr("data-key", childSnapshot.key);
//   var tableName = $("<td>"+childSnapshot.val().name+"</td>");
//   var tableRole = $("<td>"+childSnapshot.val().role+"</td>");
//   var tableStartDate = $("<td>"+childSnapshot.val().startDate+"</td>");
//   var tableWorked = $("<td>"+numMonths+"</td>");
//   var tableMonthlyRate = $("<td>"+childSnapshot.val().monthlyRate+"</td>");
//   var tableBilled = $("<td>"+totalBilled+"</td>");
//   tableRow.append(tableName,tableRole,tableStartDate,tableWorked,tableMonthlyRate,totalBilled);
//   $("tbody").append(tableRow);


// });
