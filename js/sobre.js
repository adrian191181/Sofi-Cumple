function quitarOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.transition = 'opacity 2s';
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none';
      document.body.style.overflow = 'auto'; // Permitir desplazamiento
    }, 1200);
    typeText();
    music();
  }