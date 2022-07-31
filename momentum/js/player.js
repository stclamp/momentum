import { playList } from "./playList.js";

export const player = () => {
  const playPause = document.querySelector(".play");
  const playPrev = document.querySelector(".play-prev");
  const playNext = document.querySelector(".play-next");
  const playListUl = document.querySelector(".play-list");

  let isPlay = false;
  let currentTrack = 0;

  const liItems = [];

  const audio = new Audio();

  function playAudio() {
    audio.src = playList[currentTrack].src;
    audio.currentTime = 0;
    if (isPlay) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  playPause.addEventListener("click", () => {
    isPlay = !isPlay;
    playPause.classList.toggle("pause");

    removeActive();
    setActive();
    playAudio();
  });

  playNext.addEventListener("click", () => {
    ++currentTrack;
    if (currentTrack > playList.length - 1) {
      currentTrack = 0;
    }
    removeActive();
    setActive();
    playAudio();
  });

  playPrev.addEventListener("click", () => {
    --currentTrack;
    if (currentTrack < 0) {
      currentTrack = playList.length - 1;
    }

    removeActive();
    setActive();
    playAudio();
  });

  function removeActive() {
    playList.forEach((item) => {
      item.isActive = false;
    });

    liItems.forEach((item) => {
      item.classList.remove("item-active");
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

  generatePlayList();
};
