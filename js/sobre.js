
  function carta() {
    var carta = document.getElementById("Carta");

    if (carta.classList.contains("disabled")) {
      return;
    }

    carta.classList.add("disabled");

    if (carta.classList.contains("flap")) {
      carta.classList.remove("flap");
    } else {
      carta.classList.add("flap");
    }

    setTimeout(function () {
      carta.classList.remove("disabled");
    }, 1700);
  }
  function quitar() {
    var all = document.getElementById("all");
    setTimeout(function () {
      all.remove();
      document.body.style.overflow = "scroll";
    }, 1700);
    typeText();
    music();
    AOS.init();
  }