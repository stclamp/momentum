export const images = () => {
  const body = document.querySelector("body");
  const slidePrev = document.querySelector(".slide-prev");
  const slideNext = document.querySelector(".slide-next");

  const renderBgImage = () => {
    const date = new Date();
    const currentHour = date.getHours();
    let randomImage = Math.floor(Math.random() * (20 - 1 + 1)) + 1;

    slideNext.addEventListener("click", () => {
      ++randomImage;
      if (randomImage > 20) {
        randomImage = 1;
      }
      setBgImage();
    });

    slidePrev.addEventListener("click", () => {
      --randomImage;
      if (randomImage < 1) {
        randomImage = 20;
      }
      setBgImage();
    });

    function setBgImage() {
      let timeOfDay = "morning";
      if (currentHour >= 6 && currentHour < 12) {
        timeOfDay = "morning";
      } else if (currentHour >= 12 && currentHour < 18) {
        timeOfDay = "afternoon";
      } else if (currentHour >= 18 && currentHour <= 23) {
        timeOfDay = "evening";
      } else {
        timeOfDay = "night";
      }

      const img = new Image();

      if (randomImage < 10) {
        img.src = `https://raw.githubusercontent.com/stclamp/momentum-backgrounds/main/${timeOfDay}/0${randomImage}.webp`;
      } else {
        img.src = `https://raw.githubusercontent.com/stclamp/momentum-backgrounds/main/${timeOfDay}/${randomImage}.webp`;
      }

      img.onload = () => {
        if (randomImage < 10) {
          body.style.backgroundImage = `url('https://raw.githubusercontent.com/stclamp/momentum-backgrounds/main/${timeOfDay}/0${randomImage}.webp')`;
        } else {
          body.style.backgroundImage = `url('https://raw.githubusercontent.com/stclamp/momentum-backgrounds/main/${timeOfDay}/${randomImage}.webp')`;
        }
      };
    }

    setBgImage();
  };
  renderBgImage();
};
