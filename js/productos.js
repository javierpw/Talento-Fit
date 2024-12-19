// Los productos en un array de objetos
const productos = [
  {
    id: 1,
    nombre: "Zapatillas Nike Air Force 1 07 Mujer",
    descripcion: "Zapatillas de moda para mujer",
    imagen: "./imagenes/NikeAir-Force1-M.png",
    precio: 25000,
    stock: 1,
  },
  {
    id: 2,
    nombre: "Nike Blazer Mid 77 Premium 'Dia de Muertos 2023'",
    descripcion: "Zapatillas de moda para mujer",
    imagen: "./imagenes/NikeBlazer.png",
    precio: 25000,
    stock: 10,
  },
  {
    id: 3,
    nombre: "Zapatillas Nike Air Force 1 08 Hombre",
    descripcion: "Zapatillas de moda para hombre",
    imagen: "./imagenes/NikeAir-Force1-H.jpeg",
    precio: 45000,
    stock: 20,
  },
  {
    id: 4,
    nombre: "Nike Impact 4",
    descripcion: "Zapatillas de Basquet para Hombre",
    imagen: "./imagenes/NikeImpact.png",
    precio: 60000,
    stock: 8,
  },
];

// Obtengo el item 'carrito' del local storage que es un texto
// Lo intento transformar a un Objeto de javaScript
// Si algo falla asigno un array a la constante, sino el Objeto
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const listadoProductos = document.querySelector(".listado-productos");
listadoProductos.innerHTML = "<section class='listado-productos'>";

// Recorro el array de productos
productos.forEach((producto) => {
  // Creo el HTML con los datos de cada producto
  const html = `
        <article data-id="${producto.id}" class="tarjeta">
          <h3>${producto.nombre}</h3>
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <p>${producto.descripcion}</p>
          <p>$ ${producto.precio}</p>
          <button type="button" class="agregar">Agregar</button>
        </article>
    `;

  // Agrego la section el html para ir mostrando cada producto
  listadoProductos.innerHTML += html;
});

//Agregando productos nuevos con FETCH
//PODRIAN SER NOVEDADES O PRODUCTOS TEMPORALES
fetch("./productos.json")
  .then((response) => {
    // console.log(response);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    return response.json();
  })
  .then((posts) => {
    const section = document.querySelector("section");

    //section.innerHTML = "";

    posts.forEach((post) => {
      const html = `
            <article data-id="${post.id}" class="tarjeta">
                <h3>${post.nombre}</h3>
                <img src="./imagenes/${post.imagen}" alt="${post.nombre}">
                 <p>${post.descripcion}</p>
                <p>$ ${post.precio}</p>
                <button type="button" class="agregar">Agregar</button>
            </article>
        `;
      section.innerHTML += html;
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Escucho todos los eventos click el documento
document.addEventListener("click", (event) => {
  // Si el elemento donde se hizo click contiene la clase 'agregar'
  if (event.target.classList.contains("agregar")) {
    // Busco el contenedor mas cercano que se un 'article'
    // Obtengo el id del atributo data-id
    const id = event.target.closest("article").dataset.id;

    const index = carrito.findIndex((item) => item.id == id);

    if (index == -1) {
      // Busco el elemento 'producto' dentro del array producto que tenga el 'id'
      const elemento = productos.find((producto) => producto.id == id);
      console.log(elemento);

      // Uso destructuring para creo las constante con los valores del Objeto
      const { nombre, precio } = elemento;
 
      // Creo el objeto producto para insertar en el carrito
      const producto = {
        id: id,
        nombre: nombre,
        precio: precio,
        cantidad: 1,
      };

      carrito.push(producto);
    } else {
      const producto = carrito[index];
      producto.cantidad++;
    }

    // Guardo en el localStorage el array carrito en formato JSON
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
});
