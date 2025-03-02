function actualizarContador() {
    // Definir la fecha y hora objetivo directamente en el código
    var fecha = "2025-06-21";
    var hora = "00:00:00";
    var fechaObjetivo = new Date(`${fecha}T${hora}`);

    var ahora = new Date();
    var fechaActual = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate());
    var fechaEvento = new Date(fechaObjetivo.getFullYear(), fechaObjetivo.getMonth(), fechaObjetivo.getDate());

    // Si el evento ya pasó
    if (ahora > fechaObjetivo) {
        if (fechaActual > fechaEvento) {
            document.querySelector(".row.mt-5.brd").innerHTML = `<h2 class="col-12 font text-center">La fiesta terminó 🤷‍♂️, ¡espero que la hayas pasado bien! 🫡</h2>`;
        } else {
            document.querySelector(".row.mt-5.brd").innerHTML = `<h2 class="col-12 font text-center">¡Hoy es el día 🎉! Mándale felicitaciones a Sofía 😍</h2>`;
        }
        return;
    }

    // Calcular la diferencia de tiempo
    var diferencia = fechaObjetivo.getTime() - ahora.getTime();

    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Mostrar en los respectivos divs
    document.getElementById("days").textContent = `${dias}`;
    document.getElementById("hours").textContent = `${horas}`;
    document.getElementById("minutes").textContent = `${minutos}`;
    document.getElementById("seconds").textContent = `${segundos}`;

    // Actualizar cada segundo
    setTimeout(actualizarContador, 1000);
}

// Llamar a la función al cargar la página
actualizarContador();

