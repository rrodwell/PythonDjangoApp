
// Initial Values
var date = "";
var time = "";
var description = "";

//Displays form for new appointments
function NewAppt() {
  $("#add-appt").css("display", "none");
  $("#appt-form").css("display", "block");
  $("#add-btn").css("display", "inline-block");
  $("#cancel-btn").css("display", "inline-block");
}

//Closes form for new appointments
function CloseAppt(){
  $("#add-appt").css("display", "inline-block");
  $("#appt-form").css("display", "none");
  $("#add-btn").css("display", "none");
  $("#cancel-btn").css("display", "none");
}

function SubmitAppt(date,time,desc){
  // $.ajax({
  //   url: "/do_something/",
  //   type: "POST",
  //   data: {
  //     date: date,
  //     time: time,
  //     description: desc
  //   },
  //   dataType: 'json'
  // });

  console.log("create post is working!")
  $.ajax({
    url: "/", // the endpoint
    type: "POST",
    data: {
      date: date,
      time: time,
      description: desc
    },

    // handle a successful response
    success: function (json) {
      CloseAppt();
      console.log(json);
      console.log("success");
    },

    // handle a non-successful response
    error: function (xhr, errmsg, err) {
      console.log(xhr.status + ": " + xhr.responseText);
    }
  });
}

//Searches for appointments
function Search(){
}

//Gets all appointments from the DB
function getAppointments(){

}


$(document).ready(getAppointments);

$("#add-btn").on("click", function(event) {
  event.preventDefault();
  console.log("Post submitted");
  // Grabbed values from text boxes
  date = $("#appt-date").val().trim();
  time = $("#appt-time").val().trim();
  description = $("#appt-description").val().trim();

  $("#appt-date").val("");
  $("#appt-time").val("");
  $("#appt-description").val("");

  SubmitAppt(date,time,description);
});

$("#add-appt").on("click", NewAppt);

$("#cancel-btn").on("click", CloseAppt);


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
