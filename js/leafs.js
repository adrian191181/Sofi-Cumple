
const cerezo = document.querySelector("#containerLeafs");
const leafImages = [
  "../img/Cerezos/flower.png",  
];

const leafPool = [];

const maxLeaves = 15; // Límite máximo de hojas activas


for (let i = 0; i < maxLeaves; i++) {
  let Leaf = document.createElement("div");
  Leaf.classList.add("leafs");
  Leaf.style.display = "none";
  cerezo.appendChild(Leaf);
  leafPool.push(Leaf);
}

const dropLeafs = () => {
  const availableLeaf = leafPool.find(leaf => leaf.style.display === "none");

  if (availableLeaf) {
    let x = Math.random() * (innerWidth - 40);
    let size = randomNumber(2, 4); //vh
    let z = Math.random() * 100;
    let duration = Math.random() * 10 + 5;

    let hueRotate = Math.random() * 360;
    let randomImage = leafImages[Math.floor(Math.random() * leafImages.length)];

    availableLeaf.style.left = `${x}px`;
    availableLeaf.style.width = `${size}vh`;
    availableLeaf.style.height = `${size}vh`;
    availableLeaf.style.zIndex = z;
    availableLeaf.style.animationDuration = `${duration}s`;
    availableLeaf.style.backgroundImage = `url(${randomImage})`;
    availableLeaf.style.filter = `hue-rotate(${hueRotate}deg)`;
    availableLeaf.style.display = "block"; // Mostrar la hoja

    setTimeout(() => {
      availableLeaf.style.display = "none"; // Ocultar y liberar la hoja
    }, duration * 1000);
  }
};

setInterval(dropLeafs, 300); // Reducir el intervalo para suavizar la animación

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}