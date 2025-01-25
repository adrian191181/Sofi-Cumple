function actualizarContador() {
    var fechaObjetivo = new Date(new Date().getFullYear(), 6, 21);
    if (new Date() > fechaObjetivo) {
        fechaObjetivo.setFullYear(fechaObjetivo.getFullYear() + 1);
    }

    var ahora = new Date();
    var diferencia = fechaObjetivo - ahora;

    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = `${dias}d : ${horas}h : ${minutos}m : ${segundos}s`;
    setTimeout(actualizarContador, 1000);
}

// Llamar a la función al cargar la página
actualizarContador();