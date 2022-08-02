import { time } from "./time.js";
import { greetings } from "./greetings.js";
import { weather } from "./weather.js";
import { quotes } from "./quotes.js";
import { images } from "./images.js";
import { player } from "./player.js";

window.addEventListener("DOMContentLoaded", () => {
  const settingsBtn = document.querySelector(".setting-icon");
  const settingsBlock = document.querySelector(".settings-block");
  const settingsEn = document.querySelector(".settings-en");
  const settingsRu = document.querySelector(".settings-ru");
  const settingText = document.querySelector(".settings-text");

  const state = {
    language: "en",
  };

  window.addEventListener("click", (e) => {
    if (
      !e.target.classList.contains("settings-block") &&
      !e.target.classList.contains("icono-gear")
    ) {
      settingsBlock.classList.remove("active");
    }
  });

  settingsBtn.addEventListener("click", () => {
    settingsBlock.classList.toggle("active");
  });

  settingsEn.addEventListener("click", () => {
    state.language = "en";
    settingText.textContent = "Language: ";

    time(state.language);
    greetings(state.language);
    weather(state.language);
  });

  settingsRu.addEventListener("click", () => {
    state.language = "ru";
    settingText.textContent = "Язык: ";

    time(state.language);
    greetings(state.language);
    weather(state.language);
  });

  time(state.language);
  greetings(state.language);
  weather(state.language);
  quotes();
  images();
  player();
});
