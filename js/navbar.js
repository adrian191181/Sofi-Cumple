
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

const text = "Hoy quiero compartir esta alegría con todas las personas que hacen parte de mi vida, que me aman, me quieren y respetan. Tú eres una de ellas. Deseo que seas parte de este momento tan especial para mí.";
const typingDiv = document.getElementById("frase");
const startButton = document.getElementById("startTyping");

let index = 0;

function typeText() {
  if (index < text.length) {
    typingDiv.textContent += text[index];
    index++;
    setTimeout(typeText, 70); // Controla la velocidad (100 ms por carácter)
  }
}
startButton.addEventListener("click", () => {
  // Reiniciar animación si se presiona nuevamente
  typingDiv.textContent = "";
  index = 0;
  typeText();
});