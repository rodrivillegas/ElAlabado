var listaOrden = document.getElementById("orden_lista");
const firebaseConfig = {
  apiKey: "AIzaSyDYoPl8tTmHs1skLtP264ooxE4xEiWGh2w",
  authDomain: "pedidoslablonda.firebaseapp.com",
  databaseURL: "https://pedidoslablonda-default-rtdb.firebaseio.com",
  projectId: "pedidoslablonda",
  storageBucket: "pedidoslablonda.appspot.com",
  messagingSenderId: "392418607897",
  appId: "1:392418607897:web:10767371cbcf65b0a13b88",
};
firebase.initializeApp(firebaseConfig);

// Crear el título h1
var tituloH1 = document.createElement("h1");
tituloH1.textContent = "MENÚ DE SABORES";
tituloH1.classList.add("mi-clase-h1");

// Obtener el cuerpo del documento (body)
var body = document.body;

// Agregar los títulos al inicio del cuerpo
body.insertBefore(tituloH1, body.firstChild);

// Crear el botón "Home"
var homeButton = document.createElement("div");
homeButton.textContent = "REGRESAR 🏡";
homeButton.id = "homeButton"; // Asignar el ID para aplicar los estilos CSS
homeButton.classList.add("boton-seleccion"); // Agregar la clase existente para mantener el estilo

// Agregar el evento de click al botón "Home" para que refresque la página
homeButton.addEventListener("click", function () {
  // Mostrar el SweetAlert2 con el mensaje de advertencia
  Swal.fire({
    title: "¿Seguro quieres volver al menú principal?",
    text: "Lo ordenado se borrará por completo.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
    customClass: {
      container: "cartelConfirmaPedido",
    },
  }).then((result) => {
    // Si el usuario hace clic en "Aceptar" en el SweetAlert2, entonces recargamos la página
    if (result.isConfirmed) {
      location.reload();
    }
  });
});

// Agregar el botón "Home" al contenedor deseado
document.body.appendChild(homeButton);

const productosJSON = `
{
  "Menu": [
    {
      "categoria": "PICOTEO PREVIO",
      "genero": "PAPAS",
      "nombre": "PAPAS HUMO",
      "descripcion": "Papas fritas + lactonesa ahumada de limón + verdeo.",
      "precio": 1900,
      "imagen": "./assets/PapasHumo.jpg"
    },
    {
      "categoria": "PICOTEO PREVIO",
      "genero": "PAPAS",
      "nombre": "PAPAS ALFREDO",
      "descripcion": "Papas fritas + Crema + Queso + Perejil.",
      "precio": 2000,
      "imagen": "./assets/PapasAlfredo.jpg"
    },
    {
      "categoria": "PICOTEO PREVIO",
      "genero": "BRUSQUETAS",
      "nombre": "OMNIVORAS",
      "descripcion": "a) Queso untable + Jamón serrano + Cherries confitados + Perejil; b) Queso tubo + Pimiento en escabeche + Hierbas frescas; c) Lactonesa + Pollo + Pesto de hierbas (elige en los comentarios)",
      "precio": 2800,
      "imagen": "./assets/Brusqueta1.jpg"
    },
    {
      "categoria": "PICOTEO PREVIO",
      "genero": "BRUSQUETAS",
      "nombre": "PASTOLOVER",
      "descripcion": "a) Baba ganush de berenjena + Zanahoria encurtida + Rúcula; b) Base de oliva + Manteca de ajo + Cherry confitado; c) Queso brie + Pera asada + nuez (elige en los comentarios)",
      "precio": 2800,
      "imagen": "./assets/Brusqueta1.jpg"
    },
    {
      "categoria": "PICOTEO PREVIO",
      "genero": "BRUSQUETAS",
      "nombre": "DEGUSTACIÓN SERRANA",
      "descripcion": "Seleccion de quesos y fiambres + Aceitunas + Cherries confitados.",
      "precio": 3900,
      "imagen": "./assets/Brusqueta1.jpg"
    },
    {
      "categoria": "SANDWICHES",
      "genero": "SUNSET (de 19hs a 21hs)",
      "nombre": "SANDWICH MONTECRISTO",
      "descripcion": "Jamón cocido + Tomate asado + Cebolla encurtida + Salsa de mostaza.",
      "precio": 2800,
      "imagen": "./assets/Sandwich.jpg"
    },
    {
      "categoria": "SANDWICHES",
      "genero": "SUNSET (de 19hs a 21hs)",
      "nombre": "SANDWICH VEGGIE",
      "descripcion": "Verduras asadas (berenjenas + calabacín + zanahorias), Pimientos en escabeche + Queso + Salsa de mostaza + Miel.",
      "precio": 2700,
      "imagen": "./assets/Sandwich.jpg"
    },
    {
      "categoria": "SANDWICHES",
      "genero": "SUNSET (de 19hs a 21hs)",
      "nombre": "SANDWICH GRONCHO",
      "descripcion": "Bondiola o Jamón Crudo + Queso + Manteca especiada (elige en los comentarios).",
      "precio": 2700,
      "imagen": "./assets/Sandwich.jpg"
    },
    {
      "categoria": "ENTRADAS",
      "genero": "ENTRADAS",
      "nombre": "TAQUITOS DE COSTILLA",
      "descripcion": "Carne de ternera braseada y desmenuzada + Salsa criolla + lactosa.",
      "precio": 3400,
      "imagen": "./assets/Provoleta.jpg"
    },
    {
      "categoria": "ENTRADAS",
      "genero": "ENTRADAS",
      "nombre": "EMPANADAS",
      "descripcion": "a) Carne desmenuzada; b) Verduras; c) Queso y cebolla (elige en los comentarios).",
      "precio": 600,
      "imagen": "./assets/Provoleta.jpg"
    },
    {
      "categoria": "ENTRADAS",
      "genero": "ENTRADAS",
      "nombre": "MIX DE EMBUTIDOS Y ACHURAS",
      "descripcion": "Chorizo + Morcilla + Chinchulines + Mollejas.",
      "precio": 3900,
      "imagen": "./assets/Provoleta.jpg"
    },
    {
      "categoria": "ENTRADAS",
      "genero": "ENTRADAS",
      "nombre": "PROVOLETAS",
      "descripcion": "Sola, al pesto o con chimichurri (elige en los comentarios).",
      "precio": 2900,
      "imagen": "./assets/Provoleta.jpg"
    },
    {
      "categoria": "ENSALADAS",
      "genero": "ENSALADAS",
      "nombre": "DEL VALLE",
      "descripcion": "Mix de hojas verdes + Cherries confitados + Cubos de queso + Crocante de maní tostado + crema agria.",
      "precio": 2400,
      "imagen": "./assets/Ensalada.jpg"
    },
    {
      "categoria": "ENSALADAS",
      "genero": "ENSALADAS",
      "nombre": "KUSAMA",
      "descripcion": "Lechuga + Garbanzos salteados + Choclo tostado + Quinua pop.",
      "precio": 2200,
      "imagen": "./assets/Ensalada.jpg"
    },
    {
      "categoria": "ENSALADAS",
      "genero": "ENSALADAS",
      "nombre": "CAPRICHO",
      "descripcion": "Rúcula + Queso.",
      "precio": 2200,
      "imagen": "./assets/Ensalada.jpg"
    },
    {
      "categoria": "ENSALADAS",
      "genero": "ENSALADAS",
      "nombre": "MIXTA",
      "descripcion": "Lechuga + Tomate + Cebolla + Huevo.",
      "precio": 2200,
      "imagen": "./assets/Ensalada.jpg"
    },
    {
      "categoria": "GUARNICIONES",
      "genero": "GUARNICIONES",
      "nombre": "PAPAS FRITAS",
      "descripcion": "",
      "precio": 1800,
      "imagen": "./assets/PapasFritas.jpg"
    },
    {
      "categoria": "GUARNICIONES",
      "genero": "GUARNICIONES",
      "nombre": "MIX DE VERDURAS AL RESCOLDO",
      "descripcion": "",
      "precio": 2200,
      "imagen": "./assets/mixVerduras.jpg"
    },
    {
      "categoria": "PRINCIPALES",
      "genero": "PRINCIPALES",
      "nombre": "OJO DE BIFE A LA PARRILLA (25min.)",
      "descripcion": "Se asan en el momento, favor de considerar tiempo y disponibilidad.",
      "precio": 4500,
      "imagen": "./assets/Carne.jpg"
    },
    {
      "categoria": "PRINCIPALES",
      "genero": "PRINCIPALES",
      "nombre": "BIFE DE CHORIZO (25min.)",
      "descripcion": "Se asan en el momento, favor de considerar tiempo y disponibilidad.",
      "precio": 4400,
      "imagen": "./assets/Carne.jpg"
    },
    {
      "categoria": "PRINCIPALES",
      "genero": "PRINCIPALES",
      "nombre": "COSTILLA BANDERITA (30min.)",
      "descripcion": "Se asan en el momento, favor de considerar tiempo y disponibilidad.",
      "precio": 4300,
      "imagen": "./assets/Carne.jpg"
    },
    {
      "categoria": "PRINCIPALES",
      "genero": "PRINCIPALES",
      "nombre": "T BONE A LA PARRILLA (35min.)",
      "descripcion": "Se asan en el momento, favor de considerar tiempo y disponibilidad.",
      "precio": 7500,
      "imagen": "./assets/Carne.jpg"
    },
    {
      "categoria": "PRINCIPALES",
      "genero": "PRINCIPALES",
      "nombre": "TOMAWAWK (35min.)",
      "descripcion": "Se asan en el momento, favor de considerar tiempo y disponibilidad.",
      "precio": 9900,
      "imagen": "./assets/Carne.jpg"
    },
    {
      "categoria": "PRINCIPALES",
      "genero": "PRINCIPALES",
      "nombre": "COSTILLA VENTANA (30min.)",
      "descripcion": "6 Costillas 20cm centro del costillar, p/ compartir. Solo fines de semana. Favor de considerar tiempo y disponibilidad.",
      "precio": 18900,
      "imagen": "./assets/Carne.jpg"
    },
    {
      "categoria": "PRINCIPALES",
      "genero": "PRINCIPALES",
      "nombre": "VACIO (35min.)",
      "descripcion": "Solo fines de semana. Favor de considerar tiempo y disponibilidad.",
      "precio": 9900,
      "imagen": "./assets/Carne.jpg"
    },
    {
      "categoria": "PRINCIPALES",
      "genero": "PRINCIPALES",
      "nombre": "MATAMBRE DE CERDO A LA PARRILLA",
      "descripcion": "Solo, asiático (con salsa teriyaki) o al limón (elige en los comentarios).",
      "precio": 3500,
      "imagen": "./assets/Carne.jpg"
    },
    {
      "categoria": "PRINCIPALES",
      "genero": "PRINCIPALES",
      "nombre": "POLLO GRILLADO",
      "descripcion": "Pata muslo o pechuga, solo, al limón o a la mostaza (elige en los comentarios).",
      "precio": 3200,
      "imagen": "./assets/Carne.jpg"
    },
    {
      "categoria": "PRINCIPALES",
      "genero": "PRINCIPALES",
      "nombre": "MILANESA DE OJO DE BIFE",
      "descripcion": "Rebozada con huevo saborizado y panko.",
      "precio": 4900,
      "imagen": "./assets/Carne.jpg"
    },
    {
      "categoria": "PRINCIPALES",
      "genero": "PRINCIPALES VEGGIE",
      "nombre": "BERENJENA ASADA RELLENA",
      "descripcion": "Rellena de pimiento + Cebolla + Tomate + Huevo + Queso + Crema agria + Reducción de aceto + Ralladura de limón.",
      "precio": 3500,
      "imagen": "./assets/Carne.jpg"
    },
    {
      "categoria": "PASTAS Y SALSAS",
      "genero": "PASTAS",
      "nombre": "SORRENTINOS",
      "descripcion": "a) Jamón + Queso + Pimientos asados; b) Hongos + Coliflor asado + Queso (elige en los comentarios).",
      "precio": 3500,
      "imagen": "./assets/Sorrentinos.jpg"
    },
    {
      "categoria": "PASTAS Y SALSAS",
      "genero": "PASTAS",
      "nombre": "RAVIOLES",
      "descripcion": "a) Calabaza + Queso + Maní tostado; b) Carne + Verduras al disco (elige en los comentarios).",
      "precio": 3500,
      "imagen": "./assets/Sorrentinos.jpg"
    },
    {
      "categoria": "PASTAS Y SALSAS",
      "genero": "PASTAS",
      "nombre": "TALLARINES",
      "descripcion": "",
      "precio": 3200,
      "imagen": "./assets/Sorrentinos.jpg"
    },
    {
      "categoria": "PASTAS Y SALSAS",
      "genero": "PASTAS",
      "nombre": "LASAGNA DE OSOBUCO BRASEADO",
      "descripcion": "Consultar disponibilidad.",
      "precio": 4200,
      "imagen": "./assets/Sorrentinos.jpg"
    },
    {
      "categoria": "PASTAS Y SALSAS",
      "genero": "PASTAS",
      "nombre": "LASAGNA DE VERDURAS",
      "descripcion": "Consultar disponibilidad.",
      "precio": 3900,
      "imagen": "./assets/Sorrentinos.jpg"
    },
    {
      "categoria": "PASTAS Y SALSAS",
      "genero": "ELECCION",
      "nombre": "SALSA:",
      "descripcion": "a) Roja: Salsa de tomate + Albahaca; b) Mixta: Salsa roja + Crema; c) Champiñones: Champiñones + Vino blanco + Crema (elige en los comentarios)",
      "precio": 0,
      "imagen": "./assets/Salsas.jpg"
    },
    {
      "categoria": "MENU INFANTIL",
      "genero": "MENU",
      "nombre": "CHURRASQUITO INFANTIL",
      "descripcion": "Ojo de bife angosto acompañado de papas fritas.",
      "precio": 2900,
      "imagen": "./assets/MenuKids.jpg"
    },
    {
      "categoria": "MENU INFANTIL",
      "genero": "MENU",
      "nombre": "TALLARINES INFANTIL",
      "descripcion": "Con salsa crema o mixta.",
      "precio": 2900,
      "imagen": "./assets/MenuKids.jpg"
    },
    {
      "categoria": "MENU INFANTIL",
      "genero": "MENU",
      "nombre": "SORRENTINOS INFANTIL",
      "descripcion": "Rellenos de jamón y queso.",
      "precio": 2900,
      "imagen": "./assets/MenuKids.jpg"
    },
    {
      "categoria": "POSTRES",
      "genero": "CLASICOS",
      "nombre": "HELADO DE AMERICANA",
      "descripcion": "Con crocante de frutos secos.",
      "precio": 1500,
      "imagen": "./assets/BudinPan.jpg"
    },
    {
      "categoria": "POSTRES",
      "genero": "CLASICOS",
      "nombre": "BUDIN DE PAN",
      "descripcion": "Acompañado con dulce de leche y garrapiñada de girasol.",
      "precio": 1600,
      "imagen": "./assets/BudinPan.jpg"
    },
    {
      "categoria": "POSTRES",
      "genero": "SELECTOS",
      "nombre": "BROWNIE PATAGONIA",
      "descripcion": "Base de brownie + Dulce de leche + Corazón de frutos rojos + Crema chantillí + Merengue.",
      "precio": 2500,
      "imagen": "./assets/BudinPan.jpg"
    },
    {
      "categoria": "POSTRES",
      "genero": "SELECTOS",
      "nombre": "PAVLOVA SIN T.A.C.C.",
      "descripcion": "Base de merengue + Dulce de leche + Crema chantilly. Opciones (según la estación): a) Pera; b) Frutos rojos; c) Frutilla; d) Frutas de estación (elige en los comentarios).",
      "precio": 2500,
      "imagen": "./assets/BudinPan.jpg"
    },
    {
      "categoria": "POSTRES",
      "genero": "SELECTOS",
      "nombre": "CREMOSO DE CHOCOLATE AMARGO SIN T.A.C.C.",
      "descripcion": "Tierra de cacao con harina de coco + Lajas de caramelo con semillas de sésamo + Curd de naranja.",
      "precio": 2200,
      "imagen": "./assets/BudinPan.jpg"
    },
    {
      "categoria": "POSTRES",
      "genero": "SELECTOS",
      "nombre": "SHOT DEGUSTACIÓN x 3 SIN T.A.C.C.",
      "descripcion": "",
      "precio": 2900,
      "imagen": "./assets/BudinPan.jpg"
    },
    {
      "categoria": "MERIENDAS",
      "genero": "MERIENDA",
      "nombre": "M. CLASICA",
      "descripcion": "Café con leche o infusión + 2 tostadas de pan de campo + mermelada de fruta de estación + Queso crema + Dulce de leche + Jugo de naranja.",
      "precio": 1800,
      "imagen": "./assets/CafeConLeche.jpg"
    },
    {
      "categoria": "MERIENDAS",
      "genero": "MERIENDA",
      "nombre": "M. ENERGETICA",
      "descripcion": "Café con leche o infusión + 2 tostadas de pan de campo + mermelada de fruta de estación + Queso crema + Dulce de leche + Jugo de naranja (elige en los comentarios)",
      "precio": 2000,
      "imagen": "./assets/CafeConLeche.jpg"
    },
    {
      "categoria": "MERIENDAS",
      "genero": "MERIENDA",
      "nombre": "M. GOLOSA",
      "descripcion": "Café con leche o infusión + Panqueque + Dulce de leche + Rodajas de frutas de estación + Miel + Nueces picadas + Canela (elige en los comentarios).",
      "precio": 2300,
      "imagen": "./assets/CafeConLeche.jpg"
    },
    {
      "categoria": "MERIENDAS",
      "genero": "MERIENDACLÁSICA",
      "nombre": "M. 5to PECADO",
      "descripcion": "Café con leche o infusión + Sandwich de pan de campo + Manteca + Jamon + Queso + Tomate + Huevo revuelto + Jugo de naranja (elige en los comentarios).",
      "precio": 2300,
      "imagen": "./assets/CafeConLeche.jpg"
    }
  ]
}
`;

const productos = JSON.parse(productosJSON);

function construirContenidoProductos() {
  let contenidoProductos = "";

  productos.Menu.forEach((producto) => {
    contenidoProductos += `
      <div class="opcion ${producto.categoria}"
        data-categoria="${producto.categoria}"
        data-nombre="${producto.nombre}"
      >
        <div class="entrada-info">
          <div class="columna">
            <div class="entrada-label colorSlogan">${producto.genero}</div>
            <div class="entrada-label">${producto.nombre}</div>
            <div class="entrada-label formatoDescripcion">${
              producto.descripcion
            }</div>
            <div class="precioBox">Precio Individual: $${producto.precio}</div>
            <div class="cantidad">
              <label for="cantidad_${producto.nombre.replace(
                /\s/g,
                ""
              )}" class="cantidadInfo">Cantidad:</label>
              <div class="cantidad-input">
                <button class="cantidad-btn" onclick="decrementarCantidad('cantidad_${producto.nombre.replace(
                  /\s/g,
                  ""
                )}')">-</button>
                <input
                  type="number"
                  id="cantidad_${producto.nombre.replace(/\s/g, "")}"
                  name="cantidad_${producto.nombre.replace(/\s/g, "")}"
                  min="1"
                  class="estiloCantidad"
                  value="1"
                />
                <button class="cantidad-btn" onclick="incrementarCantidad('cantidad_${producto.nombre.replace(
                  /\s/g,
                  ""
                )}')">+</button>
              </div>
            </div>
            <div class="seleccion">
              <input
                type="checkbox"
                id="seleccion_${producto.nombre.replace(/\s/g, "")}"
                name="seleccion_${producto.nombre.replace(/\s/g, "")}"
                data-categoria="${producto.categoria}"
                onchange="cambiarBoton('seleccion_${producto.nombre.replace(
                  /\s/g,
                  ""
                )}', 'label_${producto.nombre.replace(
      /\s/g,
      ""
    )}', 'cantidad_${producto.nombre.replace(/\s/g, "")}', '${
      producto.nombre
    }', ${producto.precio}, '${producto.categoria}')"
              />
              <label
                for="seleccion_${producto.nombre.replace(/\s/g, "")}"
                id="label_${producto.nombre.replace(/\s/g, "")}"
                class="label-boton"
              >Añadir al pedido</label
              >
            </div>
          </div>
          <div class="columna">
            <div class="imagen">
              <img
                src="${producto.imagen}"
                alt="Imagen de ${producto.nombre}"
              />
            </div>
          </div>
        </div>
      </div>
    `;
  });

  return contenidoProductos;
}

function filterTable() {
  var category = document.getElementById("category-select").value;
  var productosContainer = document.getElementById("productos-container");
  var productosDivs = productosContainer.querySelectorAll(".opcion");

  productosDivs.forEach(function (productoDiv, index) {
    var categoriaProducto = productoDiv.getAttribute("data-categoria");

    if (category === "todas" || category === categoriaProducto) {
      // Establecer el estilo para mostrar los elementos en línea
      productoDiv.style.display = "inline-block";
      
      // Agregar un salto de línea cada dos elementos
      if (index % 2 === 1) {
        productoDiv.style.clear = "both";
      } else {
        productoDiv.style.clear = "none";
      }
    } else {
      productoDiv.style.display = "none";
    }
  });
}


const productosContainer = document.getElementById(
  "productos-container"
);

productosContainer.innerHTML = construirContenidoProductos();

function cambiarBoton(checkboxId, labelId, cantidadId, nombre, precio) {
  var listaOrden = document.getElementById("orden_lista");
  var checkbox = document.getElementById(checkboxId);
  var label = document.getElementById(labelId);
  var cantidadElemento = document.getElementById(cantidadId);
  var cantidad = parseInt(cantidadElemento.value);
  var agregar = false; // Variable para determinar si se agrega o elimina el producto

  var tuOrdenElemento = document.getElementById("tu_orden");
  var botonComentarios = document.getElementById("btnComentarios");
  botonComentarios.classList.add("mostrar");

  var itemsEnOrden = listaOrden.getElementsByClassName("categoria-comun");

  if (checkbox.checked && label.textContent === "Añadir al pedido") {
    if (cantidadElemento.value.trim() === "") {
      Toastify({
        text: "Selecciona una cantidad válida para poder añadir al pedido.",
        duration: 4000,
        gravity: "top",
        position: "right",
        className: "toastify",
        style: { background: "linear-gradient(to right, #FF4D4D, #FF9999)" },
      }).showToast();
      return; // Detener la ejecución si el campo de cantidad está vacío
    }
    if (cantidad === 0) {
      Toastify({
        text: "Selecciona una cantidad mayor a cero para poder añadir al pedido.",
        duration: 4000,
        gravity: "top",
        position: "right",
        className: "toastify",
        style: { background: "linear-gradient(to right, #FF4D4D, #FF9999)" },
      }).showToast();
      return; // Detener la ejecución si no se selecciona una cantidad válida
    }
    // Verificar la selección antes de agregar el producto

    label.textContent = "Borrar pedido";
    label.classList.add("boton-borrar");
    agregar = true;

    tuOrdenElemento.textContent = "Tu orden 📝";

    // Habilitar el botón de pedido
    var botonPedido = document.getElementById("boton_pedido");
    botonPedido.disabled = false;
  } else if (!checkbox.checked) {
    label.textContent = "Añadir al pedido";
    label.classList.remove("boton-borrar");

    if (itemsEnOrden.length === 0) {
      tuOrdenElemento.textContent = "";
    }
  }

  agregarProducto(nombre, precio, agregar, checkboxId, listaOrden);

  // Calcular y actualizar el precio final
  var precioFinal = 0;
  var items = listaOrden.getElementsByClassName("categoria-comun");
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var precioIndividual = parseFloat(
      item.querySelector(".precio").textContent.replace("Precio: $", "")
    );
    var cantidadProducto = parseInt(
      item.querySelector(".cantidad").textContent.replace("Cantidad: ", "")
    );
    var precioTotal = precioIndividual * cantidadProducto;
    precioFinal += precioTotal;
  }

  var precioFinalElemento = document.getElementById("precio_final");
  if (precioFinal > 0) {
    precioFinalElemento.textContent =
      "(Valor total de la orden: $" + precioFinal.toFixed(2) + ")";

    // Mostrar el botón de pedido
    var botonPedido = document.getElementById("boton_pedido");
    botonPedido.style.display = "block";
  } else {
    precioFinalElemento.textContent = "";

    // Ocultar el botón de pedido
    var botonPedido = document.getElementById("boton_pedido");
    botonPedido.style.display = "none";
  }

  // Calcular y actualizar el precio final
  var precioFinal = 0;
  var items = listaOrden.getElementsByClassName("categoria-comun");
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var precioIndividual = parseFloat(
      item.querySelector(".precio").textContent.replace("Precio: $", "")
    );
    var cantidadProducto = parseInt(
      item.querySelector(".cantidad").textContent.replace("Cantidad: ", "")
    );
    var precioTotal = precioIndividual * cantidadProducto;
    precioFinal += precioTotal;
  }

  var precioFinalElemento = document.getElementById("precio_final");
  if (precioFinal > 0) {
    precioFinalElemento.textContent =
      "(Valor total de la orden: $" + precioFinal.toFixed(2) + ")";

    // Mostrar el botón de pedido
    var botonPedido = document.getElementById("boton_pedido");
    botonPedido.style.display = "block";
    var datosUsuarioElemento = document.getElementById("datos_usuario");
    datosUsuarioElemento.style.display = "block";
  } else {
    precioFinalElemento.textContent = "";

    // Ocultar el botón de pedido
    var botonPedido = document.getElementById("boton_pedido");
    botonPedido.style.display = "none";
  }
}

function resetearDatos(cantidadId, checkboxId, labelId) {
  var cantidadElemento = document.getElementById(cantidadId);
  var checkbox = document.getElementById(checkboxId);
  var label = document.getElementById(labelId);

  cantidadElemento.value = ""; // Restablecer el valor de cantidad a vacío
  checkbox.checked = false; // Desmarcar el checkbox
  label.textContent = "Añadir al pedido"; // Restablecer el texto del label
  label.classList.remove("boton-borrar");
}

function agregarProducto(nombre, precio, seleccionado, checkboxId, listaOrden) {
  var checkbox = document.getElementById(checkboxId);
  var cantidadElemento = checkbox.parentNode.parentNode
    .getElementsByClassName("cantidad")[0]
    .getElementsByTagName("input")[0];
  var cantidad = parseInt(cantidadElemento.value);

  var precioIndividual = precio;
  var precioTotal = precio * cantidad;

  if (seleccionado) {
    var listItem = document.createElement("span");
    listItem.classList.add("categoria-comun");

    var productoDescripcion = document.createElement("div");
    productoDescripcion.classList.add("producto-descripcion");

    var nombreElemento = document.createElement("span");
    nombreElemento.classList.add("nombre");
    nombreElemento.innerHTML = nombre + ": ";

    var cantidadElementoSpan = document.createElement("span");
    cantidadElementoSpan.classList.add("cantidad", "cantidadDescripcion");
    cantidadElementoSpan.innerHTML = "Cantidad: " + cantidad + "✔ ";

    var precioIndividualElemento = document.createElement("span");
    precioIndividualElemento.classList.add("precio", "precioDescripcion");
    precioIndividualElemento.innerHTML = "Precio: $" + precioIndividual + "✔ ";

    var precioTotalElemento = document.createElement("span");
    precioTotalElemento.classList.add(
      "precio",
      "precio-total",
      "precioTotalDescripcion"
    );
    precioTotalElemento.innerHTML = "Precio total: $" + precioTotal + "✔ ";

    productoDescripcion.appendChild(nombreElemento);
    productoDescripcion.appendChild(cantidadElementoSpan);
    productoDescripcion.appendChild(precioIndividualElemento);
    productoDescripcion.appendChild(precioTotalElemento);

    listItem.appendChild(productoDescripcion);
    listaOrden.appendChild(listItem);

    Toastify({
      text: "Producto agregado con éxito.",
      duration: 3000,
      gravity: "top",
      position: "right",
      className: "toastify",
      style: { background: "linear-gradient(to right, #037DC6, #79C1ED)" },
    }).showToast();
  } else {
    // Eliminar el producto de la lista si ya no está seleccionado
    var items = listaOrden.getElementsByClassName("categoria-comun");
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (
        item.getElementsByClassName("nombre")[0].textContent ===
          nombre + ": " &&
        item.getElementsByClassName("precio", "precioDescripcion")[0]
          .innerHTML ===
          "Precio: $" + precioIndividual + "✔ " &&
        item.getElementsByClassName("cantidad")[0].innerHTML ===
          "Cantidad: " + cantidad + "✔ " &&
        item.getElementsByClassName("precio-total")[0].innerHTML ===
          "Precio total: $" + precioTotal + "✔ "
      ) {
        item.parentNode.removeChild(item);

        // Resetear el valor del campo de cantidad a cero
        cantidadElemento.value = "0";

        Toastify({
          text: "Producto eliminado con éxito.",
          duration: 3000,
          gravity: "top",
          position: "right",
          className: "toastify",
          style: { background: "linear-gradient(to right, #FF4D4D, #FF9999)" },
        }).showToast();
        break;
      }
    }
  }
}

// Función para incrementar la cantidad
function incrementarCantidad(inputId) {
  const input = document.getElementById(inputId);
  input.value = parseInt(input.value) + 1;
}

// Función para decrementar la cantidad
function decrementarCantidad(inputId) {
  const input = document.getElementById(inputId);
  if (parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
  }
}

// Establecer estilos para los botones de incremento y decremento
document.addEventListener("DOMContentLoaded", function () {
  const cantidadInputs = document.querySelectorAll(".cantidad-input");

  cantidadInputs.forEach((cantidadInput) => {
    const decrementButton = cantidadInput.querySelector("button:first-child");
    const incrementButton = cantidadInput.querySelector("button:last-child");

    decrementButton.classList.add("cantidad-btn", "cantidad-decrementar");
    incrementButton.classList.add("cantidad-btn", "cantidad-incrementar");
  });
});

function mostrarDesplegable() {
  var desplegable = document.getElementById("desplegable_comentarios");
  desplegable.style.display = "block";
}

function cerrarDesplegable() {
  var desplegable = document.getElementById("desplegable_comentarios");
  desplegable.style.display = "none";
}

function guardarComentarios() {
  var comentarios = document.getElementById("campo_comentarios").value;

  // Cerrar el desplegable
  cerrarDesplegable();

  // Lógica adicional para manejar los comentarios guardados
  Toastify({
    text: "¡Comentarios agregados!",
    duration: 3000,
    gravity: "top",
    position: "right",
    className: "toastify",
    style: { background: "linear-gradient(to right, #037DC6, #79C1ED)" },
  }).showToast();
}

function obtenerDetallesPedido() {
  var detallesPedido = [];
  var items = listaOrden.getElementsByClassName("categoria-comun");

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var nombreElemento = item.getElementsByClassName("nombre")[0];
    var cantidadElemento = item.getElementsByClassName("cantidad")[0];

    var nombre = nombreElemento.textContent.replace(": ", "");
    var cantidad = parseInt(
      cantidadElemento.textContent.replace("Cantidad: ", "")
    );

    var detallePedido = {
      nombre,
      cantidad,
    };

    detallesPedido.push(detallePedido);
  }
  return detallesPedido;
}

function enviarPedido() {
  // Obtener los valores de los campos Nombre y Mesa N°
  var nombre = document.getElementById("nombre_usuario").value;
  var mesa = document.getElementById("numero_mesa").value;

  // Verificar si los campos están vacíos
  if (nombre === "" || mesa === "") {
    // Mostrar mensaje de alerta personalizado
    var mensaje =
      'Completa los campos con tu "Nombre" y el "N° de MESA"\n (lo encuentras en el QR que escaneas).';

    Toastify({
      text: mensaje,
      duration: 4000,
      gravity: "top",
      position: "right",
      className: "toastify",
      style: {
        background: "linear-gradient(to right, #FF4D4D, #FF9999)",
        "text-align": "center",
      },
    }).showToast();
    return; // Detener la ejecución del código
  }
  // Verificar si el número de mesa es válido (menor o igual a 199)
  if (mesa > 199) {
    // Mostrar mensaje de error personalizado
    var mensajeError = "El número de mesa no puede ser mayor a 199.";
    Toastify({
      text: mensajeError,
      duration: 4000,
      gravity: "top",
      position: "right",
      className: "toastify",
      style: {
        background: "linear-gradient(to right, #FF4D4D, #FF9999)",
        "text-align": "center",
      },
    }).showToast();
    return; // Detener la ejecución del código
  }
  var fechaActual = new Date();
  Swal.fire({
    title: "¿Estás seguro que deseas enviar el pedido?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Aceptar",
    customClass: {
      container: "cartelConfirmaPedido",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      // Obtén los valores de los elementos necesarios para el pedido
      const nombreUsuario = document.getElementById("nombre_usuario").value;
      const numeroMesa = document.getElementById("numero_mesa").value;
      var detallesPedido = obtenerDetallesPedido();
      var comentarios = document.getElementById("campo_comentarios").value;

      // Formatear la fecha actual
      var fechaFormateada =
        fechaActual.getDate() +
        "/" +
        (fechaActual.getMonth() + 1) +
        "/" +
        fechaActual.getFullYear();

      // Formatear la hora actual
      var horaFormateada =
        fechaActual.getHours().toString().padStart(2, "0") +
        ":" +
        fechaActual.getMinutes().toString().padStart(2, "0") +
        ":" +
        fechaActual.getSeconds().toString().padStart(2, "0");

      // Crea el objeto de pedido con los detalles del usuario, la fecha y la hora
      const pedido = {
        nombreUsuario,
        numeroMesa,
        detallesPedido,
        comentarios,
        fecha: fechaFormateada, // Guardar la fecha formateada
        hora: horaFormateada, // Guardar la hora formateada
      };

      // Obtén una referencia a la base de datos de Firebase
      const database = firebase.database();

      // Agrega el pedido a la base de datos
      database.ref().push(pedido, (error) => {
        if (error) {
          console.error("Error al guardar el pedido:", error);
          Swal.fire({
            title: "Oops...!",
            text: "Hubo un error al enviar el pedido",
            icon: "error",
            dangerMode: true,
          });
        } else {
          Swal.fire({
            title: "Pedido enviado con éxito",
            text: "El tiempo estimado de demora es de 10 min. Le agradecemos su visita y le recordamos que el personal está a su disposición.",
            icon: "success",
            customClass: {
              container: "cartelConfirmaPedido",
            },
          }).then(() => {
            location.reload(); // Reiniciar la página
          });
        }
      });
    }
  });
}
