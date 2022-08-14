export const images = () => {
  const body = document.querySelector("body");
  const slidePrev = document.querySelector(".slide-prev");
  const slideNext = document.querySelector(".slide-next");
  const imageApis = document.querySelector("#apis");
  const inputApi = document.querySelector(".settings-api-input");
  if (localStorage.getItem("api")) {
    imageApis.value = localStorage.getItem("api");
  } else {
    imageApis.value = "github";
  }

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

    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        --randomImage;
        if (randomImage < 1) {
          randomImage = 20;
        }
        setBgImage();
      }

      if (e.key === "ArrowRight") {
        ++randomImage;
        if (randomImage > 20) {
          randomImage = 1;
        }
        setBgImage();
      }
    });

    slidePrev.addEventListener("click", () => {
      --randomImage;
      if (randomImage < 1) {
        randomImage = 20;
      }

      setBgImage();
    });

    let timeOfDay = "";

    if (localStorage.getItem("tag")) {
      timeOfDay = localStorage.getItem("tag");
    } else {
      if (currentHour >= 6 && currentHour < 12) {
        timeOfDay = "morning";
      } else if (currentHour >= 12 && currentHour < 18) {
        timeOfDay = "afternoon";
      } else if (currentHour >= 18 && currentHour <= 23) {
        timeOfDay = "evening";
      } else {
        timeOfDay = "night";
      }
    }

    console.log(timeOfDay);

    inputApi.addEventListener("change", () => {
      timeOfDay = inputApi.value;
      setBgImage();
      inputApi.value = "";
      localStorage.setItem("tag", timeOfDay);
    });

    function setBgImage() {
      const img = new Image();

      img.src = `https://raw.githubusercontent.com/stclamp/momentum-backgrounds/main/morning/01.webp`;

      img.onload = () => {
        async function getLinkImage() {
          let url = "";
          let res = "";
          let data;
          if (localStorage.getItem("api") === "unsplash") {
            url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&client_id=RgTk4QY7cmJ_l_u54PDBoZwxSCOYRsXuFmwDvkCCKG8`;
            res = await fetch(url);
            data = await res.json();
            body.style.backgroundImage = `url(${data.urls.regular})`;
          } else if (localStorage.getItem("api") === "flickr") {
            url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=12bc11d17c740cd35d3ff987de40ab9c&tags=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1`;
            res = await fetch(url);
            data = await res.json();
            body.style.backgroundImage = `url(${data.photos.photo[randomImage].url_l})`;
          } else {
            if (currentHour >= 6 && currentHour < 12) {
              timeOfDay = "morning";
            } else if (currentHour >= 12 && currentHour < 18) {
              timeOfDay = "afternoon";
            } else if (currentHour >= 18 && currentHour <= 23) {
              timeOfDay = "evening";
            } else {
              timeOfDay = "night";
            }
            if (randomImage < 10) {
              body.style.backgroundImage = `url('https://raw.githubusercontent.com/stclamp/momentum-backgrounds/main/${timeOfDay}/0${randomImage}.webp')`;
            } else {
              body.style.backgroundImage = `url('https://raw.githubusercontent.com/stclamp/momentum-backgrounds/main/${timeOfDay}/${randomImage}.webp')`;
            }
          }
        }

        getLinkImage();
      };
    }

    setBgImage();

    if (localStorage.getItem("api")) {
      imageApis.addEventListener("change", () => {
        localStorage.setItem("api", imageApis.value);
        setBgImage();
      });
    } else {
      localStorage.setItem("api", imageApis.value);
      setBgImage();
    }
  };
  renderBgImage();
};
