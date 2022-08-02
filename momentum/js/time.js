export const time = (lang) => {
  const timeText = document.querySelector(".time");
  const dateText = document.querySelector(".date");
  const language = lang;
  const showTime = () => {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();

    timeText.textContent = currentTime;

    setTimeout(showTime, 1000);

    // console.log(lang);
  };

  const options = {
    month: "long",
    day: "numeric",
    weekday: "long",
  };
  const currentDate = new Date().toLocaleDateString(
    language === "en" ? "en-US" : "ru",
    options
  );

  dateText.textContent = currentDate;

  showTime();
};
