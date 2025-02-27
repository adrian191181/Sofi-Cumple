const audio = document.getElementById('audio');
const button = document.getElementById('controlButton');
const icoButton = document.getElementById('iconButton');
// Duración total de la animación (en milisegundos)
const fadeDuration = 1000;

function music() {
  const totalSteps = 60; // Más pasos = animación más suave
  const stepTime = fadeDuration / totalSteps;
  const volumeStep = 1 / totalSteps;

  if (!audio.paused) {
    // Baja el volumen gradualmente antes de pausar
    const fadeOut = setInterval(() => {
      if (audio.volume > volumeStep) {
        audio.volume -= volumeStep;
      } else {
        audio.volume = 0;
        audio.pause();
        clearInterval(fadeOut);
      }
    }, stepTime);
    // Cambiar icono
    icoButton.classList.remove('fa-volume-up');
    icoButton.classList.add('fa-volume-off');
  } else {
    // Reproduce y sube el volumen gradualmente
    // Cambiar icono
    icoButton.classList.remove('fa-volume-off');
    icoButton.classList.add('fa-volume-up');
    audio.play();
    audio.volume = 0; // Empieza desde 0
    const fadeIn = setInterval(() => {
      if (audio.volume < 1 - volumeStep) {
        audio.volume += volumeStep;
      } else {
        audio.volume = 1;
        clearInterval(fadeIn);
      }
    }, stepTime);
  }
}

button.addEventListener('click', music);
