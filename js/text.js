const text = "Hoy quiero compartir esta alegría con todas las personas que hacen parte de mi vida, que me aman, me quieren y respetan. Tú eres una de ellas. Deseo que seas parte de este momento tan especial para mí.";
const typingDiv = document.getElementById("frase");
const startButton = document.getElementById("startTyping");

let index = 0;
typingDiv.textContent = "";
function typeText() {
  if (index < text.length) {
    typingDiv.textContent += text[index];
    index++;
    setTimeout(typeText, 70); // Controla la velocidad
  }
}window.addEventListener("load", function () {
  const text = "Tienes una invitación ";
  const specialText = "especial"; // Texto dentro del <em>
  const typingDiv = document.querySelector(".fraseBienvenida");

  let index = 0;

  function typeText() {
    if (index < text.length) {
      typingDiv.innerHTML += text[index];
      index++;
      setTimeout(typeText, 50);
    } else {
      typeSpecialText();
    }
  }

  function typeSpecialText() {
    let specialIndex = 0;
    const emElement = document.createElement("em");
    emElement.classList.add("fraseBienvenida2");
    typingDiv.appendChild(emElement);

    function typeInsideEm() {
      if (specialIndex < specialText.length) {
        emElement.textContent += specialText[specialIndex];
        specialIndex++;
        setTimeout(typeInsideEm, 40);
      }
    }
    typeInsideEm();
  }

  // Iniciar la animación de escritura cuando todo haya cargado completamente
  typingDiv.innerHTML = ""; // Limpiar el contenido antes de iniciar
  typeText();
});
