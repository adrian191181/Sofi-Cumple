const familias = {
  A123: { familia: "López", pases: 6 },
  B456: { familia: "Martínez", pases: 4 },
  C789: { familia: "Fernández", pases: 7 },
  D012: { familia: "García", pases: 9 },
  E345: { familia: "Ramírez", pases: 3 },
  F678: { familia: "Sánchez", pases: 5 },
  G901: { familia: "Torres", pases: 8 },
  H234: { familia: "Jiménez", pases: 6 },
  I567: { familia: "Morales", pases: 4 },
  J890: { familia: "Castro", pases: 7 },
  K111: { familia: "Núñez", pases: 10 },
  L222: { familia: "Ortiz", pases: 5 },
  M333: { familia: "Vargas", pases: 8 },
  N444: { familia: "Herrera", pases: 6 },
  O555: { familia: "Ruiz", pases: 4 },
  P666: { familia: "Mendoza", pases: 7 },
  Q777: { familia: "Rojas", pases: 9 },
  R888: { familia: "Silva", pases: 3 },
  S999: { familia: "Delgado", pases: 5 },
  T000: { familia: "Cruz", pases: 8 },
  U135: { familia: "Paredes", pases: 6 },
  V246: { familia: "Gutiérrez", pases: 4 },
  W357: { familia: "Peña", pases: 7 },
  X468: { familia: "Chávez", pases: 10 },
  Y579: { familia: "León", pases: 5 },
  Z680: { familia: "Flores", pases: 8 },
  AA12: { familia: "Aguirre", pases: 6 },
  BB34: { familia: "Ramos", pases: 4 },
  CC56: { familia: "Vega", pases: 7 },
  DD78: { familia: "Escobar", pases: 9 },
  EE90: { familia: "Cisneros", pases: 3 },
};

function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Obtener el parámetro id de la URL
const id = getUrlParameter("id");
/*
if (id) {
  const newUrl = window.location.origin + window.location.pathname;
  window.history.replaceState({}, document.title, newUrl);
}*/

// Verificar si el id existe en los datos y actualizar el HTML
if (familias[id]) {
  document.getElementById(
    "familia-title"
  ).textContent = `Familia: ${familias[id].familia}`;
  document.getElementById("pases").textContent = `${familias[id].pases} pases`;
} else {
  var elemento = document.getElementsByClassName("inv")[0];
  elemento.remove();
}
document.getElementById("comfirmbtn").addEventListener("click", function () {
    document.getElementById("comfirmbtn").innerHTML = `<i class="fa-solid fa-spinner fa-spin-pulse me-1"></i> Generando...`;
    if (!familias[id]) {
        Swal.fire("Error", "No se encontró la familia en el registro.", "error");
        return; // Detiene la ejecución si el ID no es válido
      }
      document.body.classList.add("no-scroll");
  Swal.fire({
    title: "Confirma tu asistencia",
    html: `
        <form id="form" class="container-fluid text-start">
            <div class="mb-3">
                <label class="form-label">¿Asistirás?</label>
                <div class="form-check">
                    <input 
                        type="radio" 
                        class="form-check-input"
                        name="Confirmacion" 
                        value="Asistire" 
                        onclick="document.getElementById('pases-field').style.display = 'block';
                                 document.getElementById('pases-input').value = '';" /> 
                    <label class="form-check-label">Asistiré</label>
                </div>
                <div class="form-check">
                    <input 
                        type="radio" 
                        class="form-check-input"
                        name="Confirmacion" 
                        value="No podre asistir" 
                        onclick="document.getElementById('pases-field').style.display = 'none';
                                 document.getElementById('pases-input').value = '0';" />
                    <label class="form-check-label">No podré asistir</label>
                </div>
            </div>

            <div class="mb-3" id="pases-field">
                <label class="form-label">¿Cuántas personas irán?</label>
                <input 
                    id="pases-input"
                    class="form-control" 
                    type="number" 
                    min="0" 
                    max="${familias[id]?.pases || 0}" 
                    placeholder="Número de pases" 
                    name="Pases" />
            </div>

            <div class="mb-3">
                <label class="form-label">Mensaje para la Quinceañera</label>
                <textarea 
                    class="form-control"
                    rows="3"
                    placeholder="Escribe tu mensaje especial..." 
                    name="Mensaje" 
                    id="mensaje"></textarea>
            </div>
        </form>
        `,
    showCancelButton: true,
    confirmButtonText: "Enviar",
    cancelButtonText: "Cancelar",
    backdrop: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    didClose: () => {
        // Habilita nuevamente el scroll al cerrar la alerta
        document.body.classList.remove("no-scroll");
      },
    preConfirm: () => {
      const asistencia = Swal.getPopup().querySelector(
        'input[name="Confirmacion"]:checked'
      )?.value;
      const mensaje = Swal.getPopup().querySelector("#mensaje").value;
      const pases = Swal.getPopup().querySelector('input[name="Pases"]').value;

      if (!asistencia || !mensaje.trim()) {
        Swal.showValidationMessage("Por favor, completa todos los campos.");
      }
      if (pases > familias[id]?.pases) {
        Swal.showValidationMessage("Usted solo tiene: " +familias[id]?.pases+" pases disponibles");
      }
      return { asistencia, mensaje, pases };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      console.log("Asistencia:", result.value.asistencia);
      console.log("Mensaje:", result.value.mensaje);
      console.log("Pases:", result.value.pases);

      // Aquí agregarás el código para enviar los datos del formulario
      const formData = new FormData();
      formData.append("Confirmacion", result.value.asistencia);
      formData.append("Mensaje", result.value.mensaje);
      formData.append("Pases", result.value.pases);
      formData.append("Familia",familias[id]?.familia);

      // Llamar al script de Google Apps Script
      fetch(
        "https://script.google.com/macros/s/AKfycbyqn2SjgKjKSX7j2YqgBq_2lCehw_TIr88bI6l8dH3Kr68JQQXP-AfbmaQPLSko56JTAw/exec",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) => {
          if (response.ok) {
            Swal.fire(
              "¡Confirmado!",
              "Tu asistencia ha sido registrada.",
              "success"
            );
          } else {
            Swal.fire(
              "Error",
              "Hubo un problema al enviar los datos.",
              "error"
            );
          }
        })
        .catch((error) => {
          Swal.fire("Error", "Hubo un error en la comunicación.", "error");
          console.error("Error:", error);
        });
    }
  });
});
