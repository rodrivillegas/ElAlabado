var animationContainer = document.getElementById("animation-container");
var content = document.getElementById("content");
var seleccionadorTragos = document.getElementById("opcionesBotones");

// Ocultar el contenido y los botones de selección de tragos por defecto
content.style.display = "none";
seleccionadorTragos.style.display = "none";

// Esperar a que la animación termine y luego mostrar el contenido y los botones de selección de tragos
animationContainer.addEventListener("animationend", function () {

  content.style.display = "block";
  seleccionadorTragos.style.display = "block";
});

// Función para mostrar los Tragos y cargar el script correspondiente
function mostrarOpciones(tipo) {
  document.getElementById("opcionesBotones").style.display = "none";
  content.style.display = "block";
  animationContainer.style.display = "none";

  if (tipo === "haceTuOrden") {
    cargarScript("./js/haceTuOrden.js");
  }
  if (tipo === "llamarAlMozo") {
    cargarScript("./js/llamarAlMozo.js");
  }
  else if (tipo === "pedirLaCuenta") {
    cargarScript("./js/pedirLaCuenta.js");
  }
}

// Función para cargar un script en el documento
function cargarScript(url) {
  var script = document.createElement("script");
  script.src = url;
  document.head.appendChild(script);
}
