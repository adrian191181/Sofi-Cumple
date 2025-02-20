const sections = document.querySelectorAll('.section');
let currentSection = 0; // Índice de la sección actual
let isScrolling = false; // Bandera para evitar múltiples transiciones simultáneas
let startTouchY = 0; // Para detectar la dirección del desplazamiento táctil

/**
 * Desplaza la vista hacia la sección indicada.
 * @param {number} index - Índice de la sección destino.
 */
function scrollToSection(index) {
  if (index < 0 || index >= sections.length) return;
  isScrolling = true;
  sections[index].scrollIntoView({
    behavior: 'smooth'
  });
  currentSection = index;
  // Se establece un tiempo prudente para que finalice la transición
  setTimeout(() => {
    isScrolling = false;
  }, 1000); // Ajusta el tiempo según tu preferencia
}

// Evento para detectar el desplazamiento con la rueda del mouse o touchpad
window.addEventListener('wheel', (e) => {
  if (isScrolling) return;
  // Si se desplaza hacia abajo
  if (e.deltaY > 0) {
    if (currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1);
    }
  }
  // Si se desplaza hacia arriba
  else {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  }
  // Prevenir el scroll por defecto
  e.preventDefault();
}, { passive: false });

// Opcional: Permitir la navegación con las flechas del teclado
window.addEventListener('keydown', (e) => {
  if (isScrolling) return;
  if (e.key === 'ArrowDown') {
    if (currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1);
    }
  } else if (e.key === 'ArrowUp') {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  }
});

// Detectar desplazamiento táctil en dispositivos móviles
window.addEventListener('touchstart', (e) => {
  if (isScrolling) return;
  startTouchY = e.touches[0].clientY;
}, { passive: true });

window.addEventListener('touchend', (e) => {
  if (isScrolling) return;
  const endTouchY = e.changedTouches[0].clientY;
  const diff = startTouchY - endTouchY;

  // Si se desplazó hacia abajo
  if (diff > 50) {
    if (currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1);
    }
  }
  // Si se desplazó hacia arriba
  else if (diff < -50) {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  }
}, { passive: true });
