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
tituloH1.textContent = "MENÚ DE BEBIDAS";
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
      "categoria": "LIMONADA",
      "genero": "SIN ALCOHOL",
      "nombre": "LIMONADA CLASICA 800cc.",
      "descripcion": "Limón + Agua + Menta + Jengibre + Syrup de Limón.",
      "precio": 900,
      "imagen": "./assets/Limonada.jpg"
    },
    {
      "categoria": "LIMONADA",
      "genero": "SIN ALCOHOL",
      "nombre": "LIMONADA CLASICA 1L",
      "descripcion": "Limón + Agua + Menta + Jengibre + Syrup de Limón.",
      "precio": 1600,
      "imagen": "./assets/Limonada.jpg"
    },
    {
      "categoria": "LIMONADA",
      "genero": "SIN ALCOHOL",
      "nombre": "LIMONADA ALABADO 500cc.",
      "descripcion": "Limón + Agua de Rosas + Flor de Hibiscus.",
      "precio": 900,
      "imagen": "./assets/LimonadaAlabado.jpg"
    },
    {
      "categoria": "LIMONADA",
      "genero": "SIN ALCOHOL",
      "nombre": "LIMONADA ALABADO 1L",
      "descripcion": "Limón + Agua de Rosas + Flor de Hibiscus.",
      "precio": 1600,
      "imagen": "./assets/LimonadaAlabado.jpg"
    },
    {
      "categoria": "LIMONADA",
      "genero": "SIN ALCOHOL",
      "nombre": "LIMONADA CHIC 500cc",
      "descripcion": "Limón + Pepino + Agua + Ananá.",
      "precio": 800,
      "imagen": "./assets/LimonadaChic.jpg"
    },
    {
      "categoria": "LIMONADA",
      "genero": "SIN ALCOHOL",
      "nombre": "LIMONADA CHIC 1L.",
      "descripcion": "Limón + Pepino + Agua + Ananá.",
      "precio": 1500,
      "imagen": "./assets/LimonadaChic.jpg"
    },
    {
      "categoria": "GASEOSAS Y AGUAS",
      "genero": "SIN ALCOHOL",
      "nombre": "PEPSI CLASICA o CERO AZUCAR",
      "descripcion": "(elige en los comentarios)",
      "precio": 700,
      "imagen": "./assets/Pepsi.jpg"
    },
    {
      "categoria": "GASEOSAS Y AGUAS",
      "genero": "SIN ALCOHOL",
      "nombre": "SEVEN UP CLASICA o CERO AZUCAR",
      "descripcion": "(elige en los comentarios)",
      "precio": 700,
      "imagen": "./assets/7up.jpg"
    },
    {
      "categoria": "JUGOS",
      "genero": "SIN ALCOHOL",
      "nombre": "JUGO MINT TONIC",
      "descripcion": "Menta + Syrup, Jugo de limón + Agua tónica",
      "precio": 900,
      "imagen": "./assets/JugoNaranja.jpg"
    },
    {
      "categoria": "JUGOS",
      "genero": "SIN ALCOHOL",
      "nombre": "JUGO FUERTE ALMA",
      "descripcion": "Jugo Multifrutas + Jugo de limón + Syrup de vainilla",
      "precio": 900,
      "imagen": "./assets/JugoNaranja.jpg"
    },
    {
      "categoria": "JUGOS",
      "genero": "SIN ALCOHOL",
      "nombre": "JUGO DE NARANJA 500cc.",
      "descripcion": "Jugo de naranja naturalmente exprimido",
      "precio": 900,
      "imagen": "./assets/JugoNaranja.jpg"
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

function filterTable1() {
  var category = document.getElementById("category-select1").value;
  var productosContainer = document.getElementById("productos-container1");
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
  "productos-container1"
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
