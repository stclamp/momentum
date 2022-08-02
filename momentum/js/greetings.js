export const greetings = (lang) => {
  const greetingText = document.querySelector(".greeting");
  const nameText = document.querySelector(".name");

  const greetingRender = () => {
    const date = new Date();
    const currentHour = date.getHours();
    if (currentHour >= 6 && currentHour < 12) {
      if (lang === "en") {
        greetingText.textContent = "Good morning";
      } else if (lang === "ru") {
        greetingText.textContent = "Доброе утро";
      }
    } else if (currentHour >= 12 && currentHour < 18) {
      if (lang === "en") {
        greetingText.textContent = "Good afternoon";
      } else if (lang === "ru") {
        greetingText.textContent = "Добрый день";
      }
    } else if (currentHour >= 18 && currentHour <= 23) {
      if (lang === "en") {
        greetingText.textContent = "Good evening";
      } else if (lang === "ru") {
        greetingText.textContent = "Добрый вечер";
      }
    } else {
      if (lang === "en") {
        greetingText.textContent = "Good night";
      } else if (lang === "ru") {
        greetingText.textContent = "Доброй ночи";
      }
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
