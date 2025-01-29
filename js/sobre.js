function quitarOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.transition = 'opacity 3s';
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none';
      document.body.style.overflow = 'auto'; // Permitir desplazamiento
    }, 3000);
    typeText();
    music();
  }