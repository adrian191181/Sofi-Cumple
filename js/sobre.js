function quitarOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.transition = 'opacity 1s';
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none';
      document.body.style.overflow = 'auto'; // Permitir desplazamiento
    music();

    }, 500);
    typeText();

  }