const text = "Hoy quiero compartir esta alegría con todas las personas que hacen parte de mi vida, que me aman, me quieren y respetan. Tú eres una de ellas. Deseo que seas parte de este momento tan especial para mí.";
const typingDiv = document.getElementById("frase");

let index = 0;
typingDiv.textContent = "";
function typeText() {
  if (index < text.length) {
    typingDiv.textContent += text[index];
    index++;
    setTimeout(typeText, 70); // Controla la velocidad
  }
}