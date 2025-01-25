
const navbar = document.querySelector(".navbar");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-100px"; // Oculta el navbar al desplazarse hacia abajo
  } else {
    navbar.style.top = "0"; // Muestra el navbar al desplazarse hacia arriba
  }

  lastScrollTop = scrollTop;
});