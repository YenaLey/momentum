const API_KEY = "428fcfeb576518bf6d82f14c2eb25873";

const weatherDes = document.querySelectorAll("div.weather > section > h3")[0];
const weatherTemp = document.querySelectorAll("div.weather > section > h3")[1];
const weatherIconImg = document.querySelector("div.weather > img");

function init() {
  askForCoords();
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      getWeather(latitude, longitude);
    },
    function () {
      console.log("Can't access location.");
    }
  );
}

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      const temperature = json.main.temp;
      const weatherDescription = json.weather[0].main;
      const weatherIcon = json.weather[0].icon;
      const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

      weatherDes.innerText = `${weatherDescription}`;
      weatherTemp.innerText = `${temperature}°`;
      weatherIconImg.setAttribute("src", weatherIconAdrs);
    })
    .catch((error) => console.log("error:", error));
}

init();
