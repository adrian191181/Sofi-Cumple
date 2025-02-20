document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('nav.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const collapseElement = document.getElementById('collapsibleNavId');
  let collapseNav;


  // Configurar transición inicial después de un pequeño retraso
  setTimeout(() => {
    nav.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  }, 50);

  

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
    });
  });
});
