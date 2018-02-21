$(document).ready(getAppointments);

$("#add-btn").on("click", function(e) {
  e.preventDefault();
  console.log("Post submitted");
  // Grabbed values from text boxes
  data = {
    date : $("#id_date").val().trim(),
    time : $("#id_time").val().trim(),
    description : $("#id_description").val().trim(),
    csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val()
  }

  $("#id_date").val("");
  $("#id_time").val("");
  $("#id_description").val("");

  SubmitAppt(data);
});

$("#add-appt").on("click", NewAppt);

$("#cancel-btn").on("click", CloseAppt);


//Displays form for new appointments
function NewAppt() {
  $("#add-appt").css("display", "none");
  $("#appt-form").css("display", "block");
  $("#add-btn").css("display", "inline-block");
  $("#cancel-btn").css("display", "inline-block");
}

//Closes form for new appointments
function CloseAppt() {
  $("#add-appt").css("display", "inline-block");
  $("#appt-form").css("display", "none");
  $("#add-btn").css("display", "none");
  $("#cancel-btn").css("display", "none");
}

function SubmitAppt(apptData) {

  console.log("create post is working!")

  console.log(JSON.stringify(apptData));

  $.ajax({
    type: "POST",
    url: "/appt/schedule/", // the endpoint
    data: apptData,

    success: function () {
      CloseAppt();
      console.log("Appt successfully scheduled!");
    }

  });
}

//Searches for appointments
function Search() {


}

//Gets all appointments from the DB
function getAppointments() {

}

