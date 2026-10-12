// Lógica del asistente de configuración inicial.

const botonSiguiente1 = document.getElementById("setup-next-1");
const campoNombre = document.getElementById("setup-nombre");
const paso1 = document.getElementById("setup-step-1");   
const paso2 = document.getElementById("setup-step-2"); 
const paso3 = document.getElementById("setup-step-3"); 

botonSiguiente1.addEventListener("click", () => {
  const nombre = campoNombre.value;
  console.log("El nombre escrito es:", nombre);
    paso1.hidden = true;    
    paso2.hidden = false;  
});