// Lógica del asistente de configuración inicial.

const botonSiguiente1 = document.getElementById("setup-next-1");
const campoNombre = document.getElementById("setup-nombre");
const paso1 = document.getElementById("setup-step-1");   
const paso2 = document.getElementById("setup-step-2"); 
const paso3 = document.getElementById("setup-step-3");
const botonSiguiente2 = document.getElementById("setup-next-2");
const campoTipo = document.getElementById("setup-tipo");
const paso4 = document.getElementById("setup-step-4");
const botonSiguiente3 = document.getElementById("setup-next-3");
const campoEdad = document.getElementById("setup-edad");
const paso5 = document.getElementById("setup-step-5");
const botonSiguiente4 = document.getElementById("setup-next-4");
const campoMediciones = document.getElementById("setup-mediciones");
const contenedorHoras = document.getElementById("setup-horas");
const botonTerminar = document.getElementById("setup-finish");


const datos = {};

botonSiguiente1.addEventListener("click", () => {
  const nombre = campoNombre.value.trim();  // leer el campo de nombre y eliminar espacios en blanco al inicio y al final

  if (nombre === "") {
    alert("Necesito un nombre para referirme a ti."); // Validación del campo "nombre"
    return;  
  }

   datos.nombre = nombre;

  console.log("El nombre escrito es:", nombre);
    paso1.hidden = true;    
    paso2.hidden = false;  
});

botonSiguiente2.addEventListener("click", () => {
  const tipo = campoTipo.value;                // leer el desplegable, como hiciste con el nombre
  
  console.log("El tipo de diabetes es:", tipo);

   datos.tipo = tipo;

    paso2.hidden = true;                             // cerrar el paso 2
    paso3.hidden = false;                             // abrir el paso 3
});


botonSiguiente3.addEventListener("click", () => {
  const texto = campoEdad.value.trim();  // leer el campo de edad y eliminar espacios en blanco al inicio y al final
  const edad = Number(campoEdad.value);                // leer el campo de edad
  
  if (texto === ""){
    alert("Escribe tu edad para continuar");   // Validación del campo "edad"
    return;
  }  

    datos.edad = edad;
    
    console.log("La edad es:", edad);
    
    paso3.hidden = true;                             // cerrar el paso 3
    paso4.hidden = false;                             // abrir el paso 4
});


botonSiguiente4.addEventListener("click", () => {
  const texto = campoMediciones.value.trim();  // leer el campo de mediciones y eliminar espacios en blanco al inicio y al final
  const mediciones = Number(campoMediciones.value);                // leer el campo de mediciones
  
  if (texto === "" || mediciones < 1 || mediciones > 6) {
    alert("Escribe un número de mediciones entre 1 y 6 para continuar.");
    return;
  } 
    console.log("Las mediciones son:", mediciones);
    crearCamposHoras(mediciones); 
    
    datos.mediciones = mediciones;

    paso4.hidden = true;                             // cerrar el paso 4
    paso5.hidden = false;                             // abrir el paso 5
});


function crearCamposHoras(cantidad) {
  contenedorHoras.innerHTML = "";
  for (let i = 1; i <= cantidad; i++) {
    contenedorHoras.innerHTML += `
      <label>Medición ${i}: <input type="time" class="setup-hora" /></label><br />
    `;
  }
}

botonTerminar.addEventListener("click", () => {
  const camposHora = document.querySelectorAll(".setup-hora");
  const horas = [];

  for (const campo of camposHora) {
    console.log("Mirando casilla con valor:", campo.value);
    if (campo.value === "") {
      alert("Rellena todas las horas para continuar.");
      return;
    }
    horas.push(campo.value);
  }

  datos.horas = horas

  console.log("Datos completos:", datos);
});