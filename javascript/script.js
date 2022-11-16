function updateCurrentTime() {
  //Current
  let currentTimeElement = document.querySelector("#current-time");
  currentTimeElement.innerHTML = moment().format(
    "H:mm:ss [<small>] A[</small>]"
  );
}

function updateCitiesTime() {
  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");

  londonDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  londonTimeElement.innerHTML = moment()
    .tz("Europe/London")
    .format("H:mm:ss [<small>] A[</small>]");

  //Cancún
  let cancunElement = document.querySelector("#cancun");
  let cancunDateElement = cancunElement.querySelector(".date");
  let cancunTimeElement = cancunElement.querySelector(".time");

  cancunDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  cancunTimeElement.innerHTML = moment()
    .tz("America/Cancun")
    .format("H:mm:ss [<small>] A[</small>]");
}

updateCurrentTime();
updateCitiesTime();
setInterval(updateCurrentTime, 1000);
setInterval(updateCitiesTime, 1000);
