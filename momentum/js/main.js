import { time } from "./time.js";
import { greetings } from "./greetings.js";
import { weather } from "./weather.js";
import { quotes } from "./quotes.js";
import { images } from "./images.js";
import { player } from "./player.js";
import { todo } from "./todo.js";

window.addEventListener("DOMContentLoaded", () => {
  const settingsBtn = document.querySelector(".setting-icon");
  const settingsBlock = document.querySelector(".settings-block");
  const settingsEn = document.querySelector(".settings-en");
  const settingsRu = document.querySelector(".settings-ru");
  const settingText = document.querySelector(".settings-text");
  const settingTimeText = document.querySelector(".settings-time span");
  const settingGreetingsText = document.querySelector(
    ".settings-greetings span"
  );
  const settingWeatherText = document.querySelector(".settings-weather span");
  const settingPlayerText = document.querySelector(".settings-player span");
  const settingQuotesText = document.querySelector(".settings-quotes span");
  const settingsTime = document.querySelector("#set-time");
  const settingsGreetings = document.querySelector("#set-greeting");
  const settingsWeather = document.querySelector("#set-weather");
  const settingsQuotes = document.querySelector("#set-quotes");
  const settingsPlayer = document.querySelector("#set-player");
  const overlay = document.querySelector(".overlay");

  let state = {};

  if (localStorage.getItem("state")) {
    state = JSON.parse(localStorage.getItem("state"));
  } else {
    state = {
      language: "en",
      time: true,
      greetings: true,
      weather: true,
      player: true,
      quotes: true,
    };
  }

  settingsTime.addEventListener("click", () => {
    !settingsTime.checked ? (state.time = false) : (state.time = true);

    localStorage.setItem("state", JSON.stringify(state));

    time(state);
  });

  state.time ? (settingsTime.checked = true) : (settingsTime.checked = false);
  state.greetings
    ? (settingsGreetings.checked = true)
    : (settingsGreetings.checked = false);
  state.weather
    ? (settingsWeather.checked = true)
    : (settingsWeather.checked = false);
  state.quotes
    ? (settingsQuotes.checked = true)
    : (settingsQuotes.checked = false);
  state.player
    ? (settingsPlayer.checked = true)
    : (settingsPlayer.checked = false);

  settingsGreetings.addEventListener("click", () => {
    !settingsGreetings.checked
      ? (state.greetings = false)
      : (state.greetings = true);

    localStorage.setItem("state", JSON.stringify(state));

    greetings(state);
  });

  settingsWeather.addEventListener("click", () => {
    !settingsWeather.checked ? (state.weather = false) : (state.weather = true);

    localStorage.setItem("state", JSON.stringify(state));

    weather(state);
  });

  settingsQuotes.addEventListener("click", () => {
    !settingsQuotes.checked ? (state.quotes = false) : (state.quotes = true);

    localStorage.setItem("state", JSON.stringify(state));

    quotes(state);
  });

  settingsPlayer.addEventListener("click", () => {
    !settingsPlayer.checked ? (state.player = false) : (state.player = true);

    localStorage.setItem("state", JSON.stringify(state));
  });

  settingsBtn.addEventListener("click", () => {
    settingsBlock.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    settingsBlock.classList.remove("active");
    overlay.classList.remove("active");
  });

  if (state.language === "en") {
    settingsEn.classList.add("active");
    settingsRu.classList.remove("active");
  } else {
    settingsEn.classList.remove("active");
    settingsRu.classList.add("active");
  }

  settingsEn.addEventListener("click", () => {
    settingsRu.classList.remove("active");
    settingsEn.classList.add("active");
    state.language = "en";
    localStorage.setItem("state", JSON.stringify(state));
    setLangSettings();

    time(state);
    greetings(state);
    weather(state);
    quotes(state);
  });

  settingsRu.addEventListener("click", () => {
    settingsRu.classList.add("active");
    settingsEn.classList.remove("active");
    state.language = "ru";
    localStorage.setItem("state", JSON.stringify(state));
    setLangSettings();
    time(state);
    greetings(state);
    weather(state);
    quotes(state);
  });

  function setLangSettings() {
    if (state.language === "ru") {
      settingText.textContent = "Язык: ";
      settingTimeText.textContent = "Время: ";
      settingGreetingsText.textContent = "Приветствие: ";
      settingWeatherText.textContent = "Погода: ";
      settingPlayerText.textContent = "Плеер: ";
      settingQuotesText.textContent = "Цитата: ";
    } else {
      settingText.textContent = "Language: ";
      settingTimeText.textContent = "Time: ";
      settingGreetingsText.textContent = "Greetings: ";
      settingWeatherText.textContent = "Weather: ";
      settingPlayerText.textContent = "Player: ";
      settingQuotesText.textContent = "Quotes: ";
    }
  }

  setLangSettings();

  time(state);
  greetings(state);
  weather(state);
  quotes(state);
  images();
  player();
  todo();
});
