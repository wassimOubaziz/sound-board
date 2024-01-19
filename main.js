const btns = document.querySelectorAll("button");
const audios = document.querySelectorAll("audio");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    audios.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
    audios.forEach((audio) => {
      if (btn.getAttribute("class") == audio.getAttribute("data-set")) {
        audio.play();
        audio.volume = `0.2`;
      }
    });
  });
});
