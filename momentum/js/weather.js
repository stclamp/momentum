export const weather = (lang) => {
  const weatherIcon = document.querySelector(".weather-icon");
  const weatherCity = document.querySelector(".city");
  const weatherTemperature = document.querySelector(".temperature");
  const weatherDescription = document.querySelector(".weather-description");
  const weatherWind = document.querySelector(".wind");
  const weatherHumidity = document.querySelector(".humidity");
  const weatherError = document.querySelector(".weather-error");

  weatherCity.addEventListener("change", () => {
    localStorage.setItem("city", weatherCity.value);
    getWeather();
  });

  localStorage.getItem("city")
    ? (weatherCity.value = localStorage.getItem("city"))
    : (weatherCity.value = "Minsk");

  async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity.value}&lang=${lang}&appid=fc341543b020fb49164d8280a67986ab&units=metric`;

    const res = await fetch(url);
    const data = await res.json();

    weatherIcon.className = "weather-icon owf";

    if (data.cod[0] === "4") {
      weatherError.textContent = `Error! city not found for '${weatherCity.value}'!`;
      weatherTemperature.textContent = "";
      weatherDescription.textContent = "";
      weatherWind.textContent = ``;
      weatherHumidity.textContent = ``;
    } else {
      weatherError.textContent = ``;
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      weatherTemperature.textContent = Math.round(data.main.temp) + "°C";
      weatherDescription.textContent = data.weather[0].description;
      weatherWind.textContent = `${
        lang === "en" ? "Wind speed: " : "Скорость ветра: "
      } ${data.wind.speed} ${lang === "en" ? "m/s" : "м/с"}`;
      weatherHumidity.textContent = `${
        lang === "en" ? "Humidity: " : "Влажность: "
      } ${data.main.humidity}%`;
    }
  }

  getWeather();
};
