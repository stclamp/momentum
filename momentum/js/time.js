export const time = ({ language, time }) => {
  const timeText = document.querySelector(".time");
  const dateText = document.querySelector(".date");
  const setLanguage = language;
  const showTime = () => {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();

    timeText.textContent = currentTime;

    setTimeout(showTime, 1000);
  };

  const options = {
    month: "long",
    day: "numeric",
    weekday: "long",
  };
  const currentDate = new Date().toLocaleDateString(
    setLanguage === "en" ? "en-US" : "ru",
    options
  );

  dateText.textContent = currentDate;

  if (!time) {
    timeText.classList.add("hide");
    dateText.classList.add("hide");
  } else {
    timeText.classList.remove("hide");
    dateText.classList.remove("hide");
  }

  showTime();
};
