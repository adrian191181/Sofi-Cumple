console.log("Inicie");

// Función para eliminar elementos cuando se pasa la fecha límite
const eliminarElemento = () => {
  const btnConfirm = document.getElementById("comfirmbtn");
  btnConfirm?.remove();
  document.getElementById("confirmInf").innerHTML = "Ya paso la fecha de confirmacion";
  document.getElementById("familia").innerText = "Espero que ya hayas confirmado";
  document.getElementById("familia-title")?.remove();
  document.getElementById("invitation-text").innerHTML = "Por que...";
  document.getElementById("divPases")?.remove();
  console.log("Elemento eliminado correctamente.");
};

// Función para obtener parámetros de la URL
const getUrlParameter = name => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};

// Datos de las familias
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
  "0G3I": { familia: "Mestro Manuel", pases: 1 },
  "X9T4": { familia: "Hector", pases: 1 },
  "M7QA": { familia: "Camila", pases: 1 },
  "Z4LN": { familia: "Emiliano", pases: 1 },
  "J1RB": { familia: "Gabriela", pases: 1 },
  "K3XD": { familia: "Iram", pases: 1 },
  "T8YU": { familia: "Aitana", pases: 1 },
  "F6EV": { familia: "Jesui", pases: 1 },
  "N2MH": { familia: "Gissel", pases: 1 },
  "Y3CU": { familia: "Kelly", pases: 1 },
  "B5WP": { familia: "Sara", pases: 1 },
  "L9KZ": { familia: "Gabriel", pases: 1 },
  "R0XE": { familia: "Santiago", pases: 1 },
  "V8PL": { familia: "Ricardo", pases: 1 },
  "W6QS": { familia: "Felix", pases: 1 },
  "A3JY": { familia: "Emily", pases: 1 },
  "E7NK": { familia: "Isabella", pases: 1 },
  "D2RM": { familia: "Belem", pases: 1 },
  "U9BG": { familia: "Angel", pases: 1 },
  "H5TD": { familia: "Giovanni", pases: 1 },
  "S1XO": { familia: "Iker", pases: 1 },
  "C0AQ": { familia: "Carlos", pases: 1 },
  "Q8VW": { familia: "Raúl", pases: 1 },
  "Z6NJ": { familia: "Ronnie", pases: 1 },
  "X3YT": { familia: "Grettel", pases: 1 },
  "N7LC": { familia: "Luna", pases: 1 },
  "P4HS": { familia: "Michel", pases: 1 },
  "Y5DE": { familia: "Alexa", pases: 1 },
  "G2VK": { familia: "Dayana", pases: 1 },
  "M6BO": { familia: "Martha", pases: 1 },
  "K9AZ": { familia: "Jonathan", pases: 1 },
  "V1QE": { familia: "Laura", pases: 1 },
  "R7MN": { familia: "Luis", pases: 1 },
  "L4WX": { familia: "Antonio", pases: 1 },
  "F0TJ": { familia: "Camila", pases: 1 },
  "E6RC": { familia: "Emily", pases: 1 },
  "B3NU": { familia: "Emiliano", pases: 1 },
  "T2KP": { familia: "Daniel", pases: 1 },
  "A8HJ": { familia: "Manuel", pases: 1 },
  "D9XM": { familia: "Profe Manuel", pases: 1 },
  "H3LY": { familia: "Profe Doris", pases: 1 },
  "J5BW": { familia: "Profe Desiderio", pases: 1 },
  "S4EV": { familia: "Profe Violeta", pases: 1 },
  "W7CJ": { familia: "Profe Iliana", pases: 1 },
  "U1ZF": { familia: "Profe Ezau", pases: 1 },
  "V5ND": { familia: "Adrian", pases: 1 },
  "Q2LM": { familia: "Serena", pases: 1 },
  "W9BJ": { familia: "Marco", pases: 1 },
  "T7XP": { familia: "Bryron", pases: 1 },
  "P3XW": { familia: "Jimena", pases: 1 },
  "K6ZD": { familia: "Luna", pases: 1 }
};

// Función para actualizar el HTML según el ID de familia
const actualizarDatosFamilia = id => {
  const datos = familias[id];
  if (!datos) {
    document.querySelector(".inv")?.remove();
    return;
  }
  if (datos.pases === 1) {
    document.getElementById("familia").textContent = "Esta Invitado";
    document.getElementById("invitation-text").textContent = "!Te esperamos!";
    document.getElementById("familia-title").textContent = datos.familia;
    document.getElementById("pases").textContent = `${datos.pases} pase`;
  } else {
    document.getElementById("familia-title").textContent = `Familia: ${datos.familia}`;
    document.getElementById("pases").textContent = `${datos.pases} pases`;
  }
};

// Función para enviar los datos del formulario
const enviarDatos = ({ asistencia, mensaje, pases, familia }) => {
  const formData = new FormData();
  formData.append("Confirmacion", asistencia);
  formData.append("Mensaje", mensaje);
  formData.append("Pases", pases);
  formData.append("Familia", familia);

  fetch("https://script.google.com/macros/s/AKfycbwHuscdKFn89BwEETW1qV0hu2jIkfbT6g4DB8kRSN6ZEM2c_BCxFLOmK7lHA7yDM1Pa/exec", {
    method: "POST",
    body: formData
  })
    .then(response => {
      if (response.ok) {
        Swal.fire("¡Confirmado!", "Tu asistencia ha sido registrada.", "success");
        console.log(response)
      } else {
        Swal.fire("Error", "Hubo un problema al enviar los datos.", "error");
        console.log(response)
      }
    })
    .catch(error => {
      Swal.fire("Error", "Hubo un error en la comunicación.", "error");
      console.error("Error:", error);
    });
};

// Función para generar el HTML del modal de confirmación
const generarModalHtml = (esPaseUnico, maxPases = 0) => {
  return `
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
              document.getElementById('pases-input').value = '${esPaseUnico ? '1' : ''}';" /> 
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
      <div class="mb-3" id="pases-field" ${esPaseUnico ? "hidden" : ""}>
          <label class="form-label">¿Cuántas personas irán?</label>
          <input 
            id="pases-input"
            class="form-control" 
            type="number" 
            min="0" 
            ${!esPaseUnico ? `max="${maxPases}"` : ""}
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
  `;
};

// Función para mostrar el modal de confirmación
const mostrarModalConfirmacion = (id) => {
  const datosFamilia = familias[id];
  if (!datosFamilia) {
    Swal.fire("Error", "No se encontró la familia en el registro.", "error");
    return;
  }
  
  // Determinar si es un pase único y configurar el HTML
  const esPaseUnico = datosFamilia.pases === 1;
  const modalHtml = generarModalHtml(esPaseUnico, datosFamilia.pases);

  Swal.fire({
    title: "Confirma tu asistencia",
    html: modalHtml,
    showCancelButton: true,
    confirmButtonText: "Enviar",
    cancelButtonText: "Cancelar",
    backdrop: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    didClose: () => {
      document.body.classList.remove("no-scroll");
      setTimeout(() => {
        document.getElementById("comfirmbtn").innerHTML = "Confirmar Asistencia";
      }, 3000);
    },
    preConfirm: () => {
      document.getElementById("comfirmbtn").innerHTML = `<i class="fa-solid fa-spinner fa-spin-pulse me-1"></i> Enviando...`;
      const asistencia = Swal.getPopup().querySelector('input[name="Confirmacion"]:checked')?.value;
      const mensaje = Swal.getPopup().querySelector("#mensaje").value;
      const pases = Swal.getPopup().querySelector('input[name="Pases"]').value;
      
      if (!asistencia || !mensaje.trim()) {
        Swal.showValidationMessage("Por favor, completa todos los campos.");
      }
      if (parseInt(pases) > datosFamilia.pases) {
        Swal.showValidationMessage("Usted solo tiene: " + datosFamilia.pases + " pases disponibles");
      }
      return { asistencia, mensaje, pases };
    },
  }).then(result => {
    if (result.isConfirmed) {
      console.log("Asistencia:", result.value.asistencia);
      console.log("Mensaje:", result.value.mensaje);
      console.log("Pases:", result.value.pases);
      enviarDatos({
        asistencia: result.value.asistencia,
        mensaje: result.value.mensaje,
        pases: result.value.pases,
        familia: datosFamilia.familia
      });
    }
  });
  
  // Agregar la clase para deshabilitar el scroll mientras el modal está activo
  document.body.classList.add("no-scroll");
};

// Función principal para verificar la fecha y ejecutar la lógica correspondiente
const verificarFecha = () => {
  const ahora = new Date();
  // La fecha objetivo es el 21 de mayo a las 23:59:59 (recordar que el mes empieza en 0)
  const fechaObjetivo = new Date(ahora.getFullYear(), 4, 21, 23, 59, 59);
  console.log("Ahora:", ahora);
  console.log("Fecha objetivo:", fechaObjetivo);

  if (ahora >= fechaObjetivo) {
    eliminarElemento();
  } else {
    const id = getUrlParameter("id");
    actualizarDatosFamilia(id);
    document.getElementById("comfirmbtn").addEventListener("click", () => mostrarModalConfirmacion(id));
  }
};

// Ejecutar la verificación
verificarFecha();