export const greetings = () => {
  const greetingText = document.querySelector(".greeting");
  const nameText = document.querySelector(".name");

  const greetingRender = () => {
    const date = new Date();
    const currentHour = date.getHours();
    if (currentHour >= 6 && currentHour < 12) {
      greetingText.textContent = "Good morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      greetingText.textContent = "Good afternoon";
    } else if (currentHour >= 18 && currentHour <= 23) {
      greetingText.textContent = "Good evening";
    } else {
      greetingText.textContent = "Good night";
    }

    setTimeout(greetingRender, 600000);
  };

  const nameRender = () => {
    nameText.addEventListener("input", () => {
      localStorage.setItem("name", nameText.value);
    });
    localStorage.getItem("name")
      ? (nameText.value = localStorage.getItem("name"))
      : (nameText.value = "");
  };

  greetingRender();
  nameRender();
};
