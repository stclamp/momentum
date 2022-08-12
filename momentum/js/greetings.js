export const greetings = ({ language, greetings }) => {
  const greetingText = document.querySelector(".greeting");
  const nameText = document.querySelector(".name");

  if (!greetings) {
    greetingText.classList.add("hide");
    nameText.classList.add("hide");
  } else {
    greetingText.classList.remove("hide");
    nameText.classList.remove("hide");
  }

  const greetingRender = () => {
    const date = new Date();
    const currentHour = date.getHours();
    if (language === "ru") {
      nameText.placeholder = "[ Введите Ваше имя ]";
    } else {
      nameText.placeholder = "[ Enter name ]";
    }
    if (currentHour >= 6 && currentHour < 12) {
      if (language === "en") {
        greetingText.textContent = "Good morning";
      } else if (language === "ru") {
        greetingText.textContent = "Доброе утро";
      }
    } else if (currentHour >= 12 && currentHour < 18) {
      if (language === "en") {
        greetingText.textContent = "Good afternoon";
      } else if (language === "ru") {
        greetingText.textContent = "Добрый день";
      }
    } else if (currentHour >= 18 && currentHour <= 23) {
      if (language === "en") {
        greetingText.textContent = "Good evening";
      } else if (language === "ru") {
        greetingText.textContent = "Добрый вечер";
      }
    } else {
      if (language === "en") {
        greetingText.textContent = "Good night";
      } else if (language === "ru") {
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
