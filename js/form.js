// Función que elimina el elemento con la clase "inv"
console.log("Inicie");
function eliminarElemento() {
  const btnConfirm = document.getElementById("comfirmbtn");
  btnConfirm.remove();
  document.getElementById("confirmInf").innerHTML=`Ya paso la fecha de confirmacion`;
  document.getElementById("familia").innerText="Espero que ya hayas confirmado";
  document.getElementById("familia-title").remove();
  document.getElementById("invitation-text").innerHTML=`Por que...`;
  document.getElementById("divPases").remove();
  console.log("Elemento eliminado correctamente.");

}

// Verifica si todavía estamos antes del final del 21 de mayo
function verificarFecha() {
  const ahora = new Date();
  const fechaObjetivo = new Date(ahora.getFullYear(), 4, 21, 23, 59, 59);//Empieza en 0 el mes
  console.log(ahora)
  console.log(fechaObjetivo)
  if (ahora >= fechaObjetivo) {
    eliminarElemento();
  } else {

    const familias = {
      "A1B2": { familia: "Gamboa Cisneros", pases: 4 },
      "C3D4": { familia: "Cisneros Chong", pases: 3 },
      "E5F6": { familia: "Hernandez Cisneros", pases: 4 },
      "G7H8": { familia: "Moreno Gamboa", pases: 4 },
      "I9J0": { familia: "Osorio Gamboa", pases: 3 },
      "K1L2": { familia: "Gamboa Hernandez", pases: 2 },
      "M3N4": { familia: "Sosa Alvario", pases: 4 },
      "O5P6": { familia: "Crisantos Gamboa", pases: 2 },
      "Q7R8": { familia: "Morales Gamboa", pases: 2 },
      "S9T0": { familia: "Rodriguez Crisantos", pases: 4 },
      "U1V2": { familia: "Alvarez Alpuche", pases: 4 },
      "W3X4": { familia: "Martinez Ramos", pases: 5 },
      "Y5Z6": { familia: "Gamboa Pantoja", pases: 3 },
      "A7B8": { familia: "Tejeda Ramos", pases: 2 },
      "C9D0": { familia: "Tejeda Ramos", pases: 3 },
      "E1F2": { familia: "Tejeda Ramos", pases: 1 },
      "G3H4": { familia: "Tejeda Ramos", pases: 3 },
      "I5J6": { familia: "Gamboa Yama", pases: 3 },
      "K7L8": { familia: "Morales Gamboa", pases: 5 },
      "M9N0": { familia: "Zarate Uscanga", pases: 2 },
      "O1P2": { familia: "Garcia Barrientos", pases: 5 },
      "Q3R4": { familia: "Crisantos Gamboa", pases: 2 },
      "S5T6": { familia: "Alvizo Garcia", pases: 4 },
      "U7V8": { familia: "Gamboa Cruz", pases: 3 },
      "W9X0": { familia: "Garcia Icezaga", pases: 2 },
      "Y1Z2": { familia: "Gamboa Bonola", pases: 4 },
      "A3B4": { familia: "Perez", pases: 3 },
      "C5D6": { familia: "Alpuche Yepez", pases: 3 },
      "E7F8": { familia: "Hernandez Garcia", pases: 4 },
      "G9H0": { familia: "Ramos Lopez", pases: 2 },
      "I1J2": { familia: "Guaneros Ramos", pases: 2 },
      "K3L4": { familia: "Naranjo Mendoza", pases: 2 },
      "M5N6": { familia: "Guatemala Hernandez", pases: 4 },
      "O7P8": { familia: "Ramos Lopez", pases: 2 },
      "Q9R0": { familia: "Ramos", pases: 2 },
      "S1T2": { familia: "Canabal Chong", pases: 2 },
      "U3V4": { familia: "Chong Martinez", pases: 2 },
      "W5X6": { familia: "Chong Martinez", pases: 4 },
      "Y7Z8": { familia: "Guarneros Sedas", pases: 3 },
      "J7G8": { familia: "Maestro Desiderio", pases: 1 },
      "S2IJ": { familia: "Maestra Doris", pases: 1 },
      "Q3UJ": { familia: "Maestra Iliana", pases: 1 },
      "1K3H": { familia: "Maestro Ezau", pases: 1 },
      "GO05": { familia: "Maestra Violeta", pases: 1 },
      "5FLA": { familia: "Maestra Nohemi", pases: 1 },
      "0G3I": { familia: "Mestro Manuel", pases: 1 }
    };

    //Si solo es un pase quite Familia:

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
      if (familias[id].pases == 1) {
        document.getElementById(
          "familia"
        ).textContent = `Esta Invitado`;
        document.getElementById(
          "invitation-text"
        ).textContent = `!Te esperamos!`;
        document.getElementById(
          "familia-title"
        ).textContent = `${familias[id].familia}`;
        document.getElementById("pases").textContent = `${familias[id].pases} pase`;
      } else {
        document.getElementById(
          "familia-title"
        ).textContent = `Familia: ${familias[id].familia}`;
        document.getElementById("pases").textContent = `${familias[id].pases} pases`;
      }
    } else {
      var elemento = document.getElementsByClassName("inv")[0];
      elemento.remove();
    }
    document.getElementById("comfirmbtn").addEventListener("click", function () {
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
          setTimeout(function () {
            document.getElementById("comfirmbtn").innerHTML = "Confirmar Asistencia";
          }, 3000);
        },
        preConfirm: () => {
          document.getElementById("comfirmbtn").innerHTML = `<i class="fa-solid fa-spinner fa-spin-pulse me-1"></i> Enviando...`;
          const asistencia = Swal.getPopup().querySelector(
            'input[name="Confirmacion"]:checked'
          )?.value;
          const mensaje = Swal.getPopup().querySelector("#mensaje").value;
          const pases = Swal.getPopup().querySelector('input[name="Pases"]').value;

          if (!asistencia || !mensaje.trim()) {
            Swal.showValidationMessage("Por favor, completa todos los campos.");
          }
          if (pases > familias[id]?.pases) {
            Swal.showValidationMessage("Usted solo tiene: " + familias[id]?.pases + " pases disponibles");
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
          formData.append("Familia", familias[id]?.familia);

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
      setTimeout(function () {
        document.getElementById("comfirmbtn").innerHTML = "Confirmar Asistencia";
      }, 3000);
    });

  }
}

// Ejecutar la verificación
verificarFecha();

