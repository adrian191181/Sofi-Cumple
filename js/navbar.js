const navbar = document.querySelector(".navbar");
let lastScrollTop = 0;

// Ocultar el navbar al cargar la página si está en la parte superior
if (window.scrollY === 0) {
  navbar.style.top = "-100px";
}

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  if (scrollTop === 0) {
    navbar.style.top = "-100px"; // Oculta el navbar cuando está en la parte superior
  } else if (scrollTop > lastScrollTop) {
    navbar.style.top = "-100px"; // Oculta el navbar al desplazarse hacia abajo
  } else {
    navbar.style.top = "0"; // Muestra el navbar al desplazarse hacia arriba
  }

  lastScrollTop = scrollTop;
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse);
    bootstrapCollapse.hide(); // Contrae el menú
  });
});
