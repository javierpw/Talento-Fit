function vaciarCarrito() {
  localStorage.removeItem("carrito")
  actualizarCarrito();
}

function eliminarProducto(idProducto) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito = carrito.filter(function (producto) {
    return producto.id !== idProducto;
  });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  localStorage.removeItem(idProducto);
  actualizarCarrito();
}

function sumarProducto(id) {
  const index = carrito.findIndex((item) => item.id == id);
  const producto = carrito[index];
  producto.cantidad++;
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito();
}

function restarProducto(id) {
  const index = carrito.findIndex((item) => item.id == id);
  const producto = carrito[index];
  if (producto.cantidad >1){
      producto.cantidad--;}
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito();
}

function actualizarCarrito() {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  // console.log(carrito);
  const items = document.querySelector(".items");
  items.innerHTML = "";
  let total = 0;
  carrito.forEach((item) => {
    const html = `
        <tr data-id="${item.id}">
            <td>${item.nombre}</td>
            <td>
            <button type="button" class="restar">-</button>
            ${item.cantidad}
            <button type="button" class="sumar">+</button>            
            </td>
            <td><button type="button" class="eliminar">Eliminar</button></td>
            <td>$ ${item.precio}</td>
            <td>$ ${item.cantidad * item.precio}</td>
        </tr>
    `;
    total +=(item.cantidad * item.precio);
    items.innerHTML += html;
  });
  const html = `
  <button type="button" class="vaciar">Vaciar</button>
  <div><strong>El total es: ${total}</strong></div>
     `;
     items.innerHTML += html;
}
actualizarCarrito();
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("eliminar")) {
    const id = event.target.closest("tr").dataset.id;
    eliminarProducto(id);
  }
});
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("sumar")) {
    const id = event.target.closest("tr").dataset.id;
    console.log(id);
    sumarProducto(id);
  }
});
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("restar")) {
    const id = event.target.closest("tr").dataset.id;
    console.log(id);
    restarProducto(id);
  }
});
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("vaciar")) {
    if (confirm('¿Está seguro que quiere vaciar el carrito?')) {
      vaciarCarrito();
    } 
  }
});
