function option() {
  var bookingtype = document.getElementById("bookingtype").value;
  var datecontainer = document.getElementById("datecontainer");
  var slotcontainer = document.getElementById("slotcontainer");
  var timecontainer = document.getElementById("timecontainer");
  datecontainer.style.display = "none";
  timecontainer.style.display = "none";
  slotcontainer.style.display = "none";
  if (bookingtype === "fullday") {
    datecontainer.style.display = "block";
  } else if (bookingtype === "halfday") {
    datecontainer.style.display = "block";
    slotcontainer.style.display = "block";
  } else if (bookingtype === "hourly") {
    datecontainer.style.display = "block";
    timecontainer.style.display = "block";
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Form submitted successfully!");
});