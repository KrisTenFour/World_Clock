function updateCurrentTime() {
  //Current
  let currentTimeElement = document.querySelector("#current-time");
  currentTimeElement.innerHTML = moment().format(
    "H:mm:ss [<small>] A[</small>]"
  );
}

function updateTime() {
  //London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");

    londonDateElement.innerHTML = moment().format("MMMM Do, YYYY");
    londonTimeElement.innerHTML = moment()
      .tz("Europe/London")
      .format("HH:mm:ss [<small>] A[</small>]");
  }

  //Cancún
  let cancunElement = document.querySelector("#cancun");
  if (cancunElement) {
    let cancunDateElement = cancunElement.querySelector(".date");
    let cancunTimeElement = cancunElement.querySelector(".time");

    cancunDateElement.innerHTML = moment().format("MMMM Do, YYYY");
    cancunTimeElement.innerHTML = moment()
      .tz("America/Cancun")
      .format("HH:mm:ss [<small>] A[</small>]");
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.split("/")[1].replace("_", " ");
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
     <div class="city">
          <div>
            <h3 class="name">${cityName}</h3>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm:ss")} 
          <small>${cityTime.format(" A")}</small>
          </div>
     </div>
        `;
}

updateCurrentTime();
updateTime();
setInterval(updateCurrentTime, 1000);
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#cities-select");
citiesSelectElement.addEventListener("change", updateCity);
