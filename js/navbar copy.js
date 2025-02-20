document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('nav.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const collapseElement = document.getElementById('collapsibleNavId');
  let lastScroll = 0;
  let isProgrammaticScroll = false;
  let collapseNav;

  // Ocultar navbar inicialmente
  nav.classList.add('nav-hidden');

  // Configurar transición inicial después de un pequeño retraso
  setTimeout(() => {
    nav.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  }, 50);

  // Control de visibilidad con scroll
  window.addEventListener('scroll', () => {
    if (isProgrammaticScroll) return;
    
    const currentScroll = window.pageYOffset;
    const scrollDelta = 5;

    // Si el scroll es 0, ocultar la navbar y actualizar lastScroll
    if (currentScroll === 0) {
      nav.classList.add('nav-hidden');
      lastScroll = currentScroll;
      return;
    }
    
    if (Math.abs(currentScroll - lastScroll) < scrollDelta) return;
    
    if (currentScroll > lastScroll && currentScroll > nav.offsetHeight) {
      // Scroll hacia abajo
      nav.classList.add('nav-hidden');
    } else {
      // Scroll hacia arriba
      nav.classList.remove('nav-hidden');
    }
    lastScroll = currentScroll;
  });

  // Control de menú móvil
  if (collapseElement) {
    collapseNav = new bootstrap.Collapse(collapseElement, { toggle: false });
  }

  // Control de clic en enlaces
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Colapsar menú en móvil
      if (window.getComputedStyle(nav.querySelector('.navbar-toggler')).display !== 'none') {
        collapseNav.hide();
      }
      
      // Ocultar navbar
      nav.classList.add('nav-hidden');
      
      // Control de scroll automático
      isProgrammaticScroll = true;
      setTimeout(() => {
        isProgrammaticScroll = false;
      }, 1000);
    });
  });
});
