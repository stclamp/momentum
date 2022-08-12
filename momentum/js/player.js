import { playList } from "./playList.js";

export const player = () => {
  const audioPlayer = document.querySelector(".player");
  const playPause = document.querySelector(".play");
  const playPrev = document.querySelector(".play-prev");
  const playNext = document.querySelector(".play-next");
  const playerCurrentName = document.querySelector(".player-current-name");
  const playListUl = document.querySelector(".play-list");
  const timeline = document.querySelector(".timeline");
  const volumeSlider = document.querySelector(".volume-slider");
  const volumeButton = document.querySelector(".volume-button");
  const settingsPlayer = document.querySelector("#set-player");

  settingsPlayer.addEventListener("click", () => {
    localStorage.setItem("isPlayerActive", settingsPlayer.checked);
    !JSON.parse(localStorage.getItem("isPlayerActive"))
      ? audioPlayer.classList.add("hide")
      : audioPlayer.classList.remove("hide");
  });

  // localStorage.getItem("isPlayerActive")
  //   ? audioPlayer.classList.add("hide")
  //   : audioPlayer.classList.remove("hide");

  !JSON.parse(localStorage.getItem("isPlayerActive"))
    ? audioPlayer.classList.add("hide")
    : audioPlayer.classList.remove("hide");

  settingsPlayer.checked ? audioPlayer.classList.remove("hide") : null;

  let isPlay = false;
  let isPlayBtn = false;
  let currentTrack = 0;
  let currentTime = 0;

  const liItems = [];
  const btnItems = [];
  let checkEndTrack;

  const audio = new Audio();

  function playAudio() {
    audio.src = playList[currentTrack].src;
    audio.currentTime = currentTime;
    audio.play();
    playerCurrentName.textContent = playList[currentTrack].title;
  }

  audioPlayer.querySelector(".time-player .length").textContent =
    playList[0].duration;

  audio.addEventListener(
    "loadeddata",
    () => {
      audioPlayer.querySelector(".time-player .length").textContent = getTime(
        audio.duration
      );
      audio.volume = 1;
    },
    false
  );

  timeline.addEventListener(
    "click",
    (e) => {
      const timelineWidth = window.getComputedStyle(timeline).width;
      const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
      audio.currentTime = timeToSeek;
    },
    false
  );

  setInterval(() => {
    const progressBar = audioPlayer.querySelector(".progress");
    progressBar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
    audioPlayer.querySelector(".time-player .current").textContent = getTime(
      audio.currentTime
    );
    currentTime = audio.currentTime;
  }, 500);

  volumeSlider.addEventListener(
    "click",
    (e) => {
      const sliderWidth = window.getComputedStyle(volumeSlider).width;
      const newVolume = e.offsetX / parseInt(sliderWidth);
      audio.volume = newVolume;
      audioPlayer.querySelector(".volume-percentage").style.width =
        newVolume * 100 + "%";
    },
    false
  );

  volumeButton.addEventListener("click", () => {
    const volumeEl = audioPlayer.querySelector(".volume-container .volume");
    audio.muted = !audio.muted;
    if (audio.muted) {
      volumeEl.classList.remove("icono-volumeMedium");
      volumeEl.classList.add("icono-volumeMute");
    } else {
      volumeEl.classList.add("icono-volumeMedium");
      volumeEl.classList.remove("icono-volumeMute");
    }
  });

  function playNextTrack() {
    if (audio.ended) {
      ++currentTrack;
      if (currentTrack > playList.length - 1) {
        currentTrack = 0;
      }
      currentTime = 0;
      removeActive();
      setActive();
      playAudio();
    }
  }

  playPause.addEventListener("click", () => {
    isPlay = !isPlay;
    playPause.classList.toggle("pause");

    removeActive();
    setActive();

    if (!isPlay) {
      audio.pause();
    } else {
      playAudio();
    }

    if (audio.paused) {
      clearInterval(checkEndTrack);
    } else {
      checkEndTrack = setInterval(playNextTrack, 1000);
    }
  });

  playNext.addEventListener("click", () => {
    ++currentTrack;
    if (currentTrack > playList.length - 1) {
      currentTrack = 0;
    }
    currentTime = 0;
    audio.currentTime = 0;

    if (!isPlay) {
      audio.pause();
      currentTime = 0;
    } else {
      playAudio();
      currentTime = 0;
    }
    removeActive();
    setActive();
  });

  playPrev.addEventListener("click", () => {
    --currentTrack;
    if (currentTrack < 0) {
      currentTrack = playList.length - 1;
    }

    currentTime = 0;
    audio.currentTime = 0;

    if (!isPlay) {
      audio.pause();
    } else {
      playAudio();
    }

    removeActive();
    setActive();
  });

  function removeActive() {
    playList.forEach((item) => {
      item.isActive = false;
    });

    liItems.forEach((item) => {
      item.classList.remove("item-active");
    });

    btnItems.forEach((item) => {
      item.classList.remove("pause");
    });
  }

  function setActive() {
    playList[currentTrack].isActive = !playList[currentTrack].isActive;

    if (playList[currentTrack].isActive) {
      playListUl.children[currentTrack].classList.add("item-active");
    } else {
      playListUl.children[currentTrack].classList.remove("item-active");
    }
  }

  function generatePlayList() {
    playList.forEach((item, i) => {
      const li = document.createElement("li");

      li.textContent = item.title;
      li.classList.add("play-item");

      liItems.push(li);
      playListUl.appendChild(li);
    });
  }

  function getTime(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
      seconds % 60
    ).padStart(2, 0)}`;
  }

  generatePlayList();
};
