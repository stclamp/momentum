import { time } from "./time.js";
import { greetings } from "./greetings.js";
import { weather } from "./weather.js";
import { quotes } from "./quotes.js";
import { images } from "./images.js";
import { player } from "./player.js";

window.addEventListener("DOMContentLoaded", () => {
  time();
  greetings();
  weather();
  quotes();
  images();
  player();
});
