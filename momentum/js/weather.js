export const weather = () => {
  const weatherIcon = document.querySelector(".weather-icon");
  const weatherCity = document.querySelector(".city");
  const weatherTemperature = document.querySelector(".temperature");
  const weatherDescription = document.querySelector(".weather-description");
  const weatherWind = document.querySelector(".wind");
  const weatherHumidity = document.querySelector(".humidity");
  const weatherError = document.querySelector(".weather-error");

  weatherCity.addEventListener("input", () => {
    localStorage.setItem("city", weatherCity.value);
    getWeather();
  });

  localStorage.getItem("city")
    ? (weatherCity.value = localStorage.getItem("city"))
    : (weatherCity.value = "");

  function getWeather() {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${localStorage.getItem(
        "city"
      )}&limit=5&appid=fc341543b020fb49164d8280a67986ab`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.length === 0) {
          weatherError.textContent = `Error! city not found for '${weatherCity.value}'!`;
        } else {
          weatherError.textContent = "";
        }
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&appid=fc341543b020fb49164d8280a67986ab`
        )
          .then((response) => {
            return response.json();
          })
          .then((dataWeather) => {
            weatherIcon.src = `http://openweathermap.org/img/w/${dataWeather.weather[0].icon}.png`;
            weatherTemperature.textContent =
              Math.round(dataWeather.main.temp) + "°C";
            weatherDescription.textContent = dataWeather.weather[0].description;
            weatherWind.textContent = `Wind speed: ${dataWeather.wind.speed} m/s`;
            weatherHumidity.textContent = `Humidity: ${dataWeather.main.humidity}%`;
          });
      });
    setTimeout(getWeather, 60000);
  }

  getWeather();
};
