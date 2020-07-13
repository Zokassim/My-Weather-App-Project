function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Recent Search: ${searchInput.value}`;
  let apiKey = "cd44a6131a8e9ef3a77b9a42fdcdf4b5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let currentCity = response.data.name;
  let currentCountry = response.data.sys.country;
  let currentTemp = Math.round(response.data.main.temp);
  let currentHumidity = response.data.main.humidity;
  let currentWindSpeed = Math.round(response.data.wind.speed);
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${currentCity}, ${currentCountry}`;
  let h4 = document.querySelector("h4");
  h4.innerHTML = `${currentTemp}°`;
  let small = document.querySelector("#humidity");
  small.innerHTML = `${currentHumidity}%`;
  let em = document.querySelector("#wind-speed");
  em.innerHTML = `${currentWindSpeed}mph`;
}

let form = document.querySelector("#search-city");
form.addEventListener("submit", search);

let now = new Date();
let h3 = document.querySelector("h3");

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
h3.innerHTML = `Today ${day} ${hours}:${minutes}`;
