const playButton = document.getElementById("playIco");
const playBtn = document.getElementById("playPause");
const audio = document.getElementById("audio");
const progressBar = document.getElementById("progress");

// Función para reproducir o pausar el audio
function music(){
  if (audio.paused) {
    audio.play();
    playButton.classList.replace("fa-play", "fa-pause");
  } else {
    audio.pause();
    playButton.classList.replace("fa-pause", "fa-play");
  }
}

// Actualizar barra de progreso
audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = progress + "%";
});
