const cerezo = document.querySelector("#containerLeafs");

const dropLeafs = () => {

    let Leaf = document.createElement('Leafs');

    let x = innerWidth * Math.random();
    let size = (Math.random() * 30) + 2;
    let z = Math.random(Math.random()) * 100;
    let delay = Math.random() * 5;
    let duration = (Math.random() * 10) + 5;

    Leaf.style.left = x + 'px'
    Leaf.style.width = size + 'px'
    Leaf.style.height = size + 'px'
    Leaf.style.zIndex = z
    Leaf.style.animationDelay = delay + 's'
    Leaf.style.animationDuration = duration + 's'

    cerezo.appendChild(Leaf);

    setTimeout(() => {
        Leaf.remove();
    }, duration * 1000);

}

setInterval(dropLeafs, 600);


const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-100px'; // Oculta el navbar al desplazarse hacia abajo
  } else {
    navbar.style.top = '0'; // Muestra el navbar al desplazarse hacia arriba
  }

  lastScrollTop = scrollTop;
});