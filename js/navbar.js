document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('nav.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const collapseElement = document.getElementById('collapsibleNavId');
  let lastScroll = 0;
  let isProgrammaticScroll = false;
  let collapseNav;

  // 1. Mostrar navbar después de 1 segundo con animación
  setTimeout(() => {
    nav.hidden = false;
    nav.style.transform = 'translateY(0)';
  }, 1000);

  // 2. Control de visibilidad con scroll
  window.addEventListener('scroll', () => {
    if (isProgrammaticScroll) return;
    
    const currentScroll = window.pageYOffset;
    const scrollDelta = 5; // Margen para detectar scroll mínimo

    if (Math.abs(currentScroll - lastScroll) < scrollDelta) return;

    if (currentScroll > lastScroll && currentScroll > nav.offsetHeight) {
      // Scroll hacia abajo
      nav.style.transform = 'translateY(-100%)';
    } else {
      // Scroll hacia arriba
      nav.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
  });

  // 3. Control de clic en enlaces
  if (collapseElement) {
    collapseNav = new bootstrap.Collapse(collapseElement, { toggle: false });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Colapsar menú en móvil
      if (window.getComputedStyle(nav.querySelector('.navbar-toggler')).display !== 'none') {
        collapseNav.hide();
      }
      
      // Ocultar navbar con transición
      nav.style.transform = 'translateY(-100%)';
      
      // 4. Control de scroll automático
      isProgrammaticScroll = true;
      setTimeout(() => {
        isProgrammaticScroll = false;
        //nav.style.transform = 'translateY(0)';
      }, 1000);
    });
  });
});