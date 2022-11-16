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

  //Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");

  parisDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  parisTimeElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("H:mm:ss [<small>] A[</small>]");
}

updateCurrentTime();
updateCitiesTime();
setInterval(updateCurrentTime, 1000);
setInterval(updateCitiesTime, 1000);
