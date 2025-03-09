


const familias = {
    "H856": {
        familia: "Pérez",
        pases: 10
    },
    "022K": {
        familia: "Gómez",
        pases: 5
    },
    "Z660": {
        familia: "Rodríguez",
        pases: 8
    }
};
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Obtener el parámetro id de la URL
const id = getUrlParameter('id');

if (id) {
    const newUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, newUrl);
  }

// Verificar si el id existe en los datos y actualizar el HTML
if (familias[id]) {
    document.getElementById('familia-title').textContent = `Familia: ${familias[id].familia}`;
    document.getElementById('pases').textContent = `${familias[id].pases} pases`;
} else {
    document.body.innerHTML = '<div style="width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; background-color: #f8d7da; color: #721c24; font-size: 2em;" class="font">URL inválida</div>';
    document.body.style.margin = '0';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';
    document.body.style.backgroundColor = '#f8d7da';
    document.body.style.color = '#721c24';
    document.body.style.fontSize = '2em';
    document.body.style.textAlign = 'center';
}

document.getElementById("comfirmbtn").addEventListener("click", function () {
    Swal.fire({
        title: 'Confirma tu asistencia',
        html: `
        <label for="asistencia">¿Asistirás al evento?</label>
        <select id="asistencia" class="swal2-input">
        <option>Sí asistiré</option>
        <option>No podré asistir</option>
        <label for="asistenciaConfirm">¿Cuantos asistiran?</label>
        <input id="asistenciaConfirm" type="number" min="0" placeholder="Cuantos asistiran?"</input>
        </select>
        <label for="mensaje">Mensaje para la persona festejada</label>
        <textarea id="mensaje" class="swal2-textarea" placeholder="Escribe un mensaje especial..."></textarea>
        `,
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        cancelButtonText: 'Cancelar',
        preConfirm: () => {
            const asistencia = document.getElementById('asistencia').value;
            const mensaje = document.getElementById('mensaje').value;

            if (!mensaje.trim()) {
                Swal.showValidationMessage('Por favor, escribe un mensaje especial.');
            }

            return { asistencia, mensaje };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            console.log('Asistencia:', result.value.asistencia);
            console.log('Mensaje:', result.value.mensaje);
            Swal.fire('¡Confirmado!', 'Tu asistencia ha sido registrada: ' + familias[id].familia, 'success');
        }
    });

})

