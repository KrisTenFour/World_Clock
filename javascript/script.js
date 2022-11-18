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

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");

    tokyoDateElement.innerHTML = moment().format("MMMM Do, YYYY");
    tokyoTimeElement.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("HH:mm:ss [<small>] A[</small>]");
  }

  //New york
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");

    newYorkDateElement.innerHTML = moment().format("MMMM Do, YYYY");
    newYorkTimeElement.innerHTML = moment()
      .tz("America/New_York")
      .format("HH:mm:ss [<small>] A[</small>]");
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.split("/")[1].replace("_", " ");
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
     <div class="city">
          <div class="name-date">
            <h3 class="name">${cityName}</h3>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm:ss")} 
          <small>${cityTime.format(" A")}</small>
          </div> 
     </div> 
      <div id="back-link"><a href="/">Back</a></div>
        `;
}

updateCurrentTime();
updateTime();
setInterval(updateCurrentTime, 1000);
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#cities-select");
citiesSelectElement.addEventListener("change", updateCity);
