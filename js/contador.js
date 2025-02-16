function actualizarContador() {
    // Definir la fecha y hora objetivo directamente en el código
    var fecha = "2025-06-21";
    var hora = "00:00:00";
    var fechaObjetivo = new Date(`${fecha}T${hora}`);
    
    var ahora = new Date();
    var fechaActual = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate());
    var fechaEvento = new Date(fechaObjetivo.getFullYear(), fechaObjetivo.getMonth(), fechaObjetivo.getDate());
    
    if (ahora > fechaObjetivo) {
        if (fechaActual > fechaEvento) {
            document.getElementById("contador").innerHTML = "La fiesta termino 🤷‍♂️, espero que la hayas pasado bien! 🫡";
        } else {
            document.getElementById("contador").innerHTML = "Hoy es el dia 🎉. Mandale felicitaciones a sofia! 😍";
        }
        return;
    }

    var diferencia = fechaObjetivo.getTime() - ahora.getTime();

    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = `${dias}d : ${horas}h : ${minutos}m : ${segundos}s`;
    setTimeout(actualizarContador, 1000);
}

// Llamar a la función al cargar la página
actualizarContador();
