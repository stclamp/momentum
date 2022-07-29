export const time = () => {
  const timeText = document.querySelector(".time");
  const dateText = document.querySelector(".date");
  const showTime = () => {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();

    const options = {
      month: "long",
      day: "numeric",
      weekday: "long",
    };
    const currentDate = date.toLocaleDateString("en-EN", options);
    timeText.textContent = currentTime;
    dateText.textContent = currentDate;
    setTimeout(showTime, 1000);
  };

  showTime();
};
