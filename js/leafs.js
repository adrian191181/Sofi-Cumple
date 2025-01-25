const cerezo = document.querySelector("#containerLeafs");
  const leafImages = [
    "../img/petalo1.png",
    "../img/petalo2.png",
    "../img/petalo3.png"
  ];

  const dropLeafs = () => {
    let Leaf = document.createElement("div");
    Leaf.classList.add("leafs");

    let x = Math.random() * (innerWidth - 40);
    let size = Math.random() * 30 + 10;
    let z = Math.random() * 100;
    let duration = Math.random() * 10 + 5;

    let hueRotate = Math.random() * 360;
    let randomImage = leafImages[Math.floor(Math.random() * leafImages.length)];

    Leaf.style.left = `${x}px`;
    Leaf.style.width = `${size}px`;
    Leaf.style.height = `${size}px`;
    Leaf.style.zIndex = z;
    Leaf.style.animationDuration = `${duration}s`;
    Leaf.style.backgroundImage = `url(${randomImage})`;
    Leaf.style.filter = `hue-rotate(${hueRotate}deg)`;

    cerezo.appendChild(Leaf);

    setTimeout(() => {
      Leaf.remove();
    }, 10000);
  };

  setInterval(dropLeafs, 600);
