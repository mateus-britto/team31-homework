// Weather App - Optional Homework

// Variables
const condition = document.getElementById("condition");
const temperature = document.getElementById("temperature");
const city = document.getElementById("city");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const rain = document.getElementById("rain");
const local = document.getElementById("local"); // Input field

// Function to get the weather data
function fetchWeatherData(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=55dba922fe86188840822e10b4b52fad`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {

      // Check if the API returned an error
      if (data.cod !== 200) {
        alert("City not found. Please enter a valid city name.");
        return;
      }

      // Temperature
      temperature.innerHTML = `${(data.main.temp - 273.15).toFixed(2)}°C`;
      city.innerHTML = `${data.name} <span class="country">${data.sys.country}</span>`;

      // The sunrise and sunset time conversions where made with AI
      // Sunrise
      const sunriseTime = data.sys.sunrise;
      const sunriseDate = new Date(sunriseTime * 1000); // Convert to milliseconds
      const formattedSunriseTime = sunriseDate.toISOString().substr(11, 5); // Extract just the time (HH:MM)

      const sunrise = document.getElementById("sunrise");
      sunrise.innerHTML = `<span class="rise-set">Sunrise:</span> ${formattedSunriseTime}<span class="am-pm"> am</span>`;

      // Sunset
      const sunsetTime = data.sys.sunset;
      const sunsetDate = new Date(sunsetTime * 1000); // Convert to milliseconds
      const formattedSunsetTime = sunsetDate.toISOString().substr(11, 5); // Extract just the time (HH:MM)

      const sunset = document.getElementById("sunset");
      sunset.innerHTML = `<span class="rise-set">Sunset:</span> ${formattedSunsetTime}<span class="am-pm"> pm</span>`;

      // Conditions
      switch (data.weather[0].main) {
        case "Clouds":
          condition.innerHTML = "☁️";
          break;
        case "Clear":
          condition.innerHTML = "☀️";
          break;
        case "Rain":
          condition.innerHTML = "🌧️";
          break;
        case "Snow":
          condition.innerHTML = "❄️";
          break;
        default:
          condition.innerHTML = "❓"; // Default icon for unknown conditions
      }

      // Wind
      wind.innerHTML = `${(data.wind.speed * 1.60934).toFixed(0)}<span class="units"> Km/h</span>`;

      // Humidity
      humidity.innerHTML = `${data.main.humidity}<span class="units"> %</span>`;

      // Precipitation
      if (data.rain) {
        rain.innerHTML = `${data.rain ? data.rain["1h"] : 0}<span class="units"> mm/h</span>`;
      } else {
        rain.innerHTML = `${0}<span class="units"> mm/h</span>`;
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
}

// Getting the current date (AI assisted)
const currentDate = new Date();
const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString("default", {
  month: "long",
})} ${currentDate.getFullYear()}`;

const date = document.getElementById("date");
date.innerHTML = formattedDate;

local.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    let userInput = event.target.value;

    // Clear the input field after pressing Enter
    event.target.value = "";

    // Reuse the function
    fetchWeatherData(userInput);
  }
});

fetchWeatherData("copenhagen");
