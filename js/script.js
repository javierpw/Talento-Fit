//Crear una funcion que genere un array de Productos
//y los muestre en consola
const productos =[];
function generarProductos() {
productos.push({id:1, nombre:"Producto 1", Descripcion:"xx", Precio:10});
productos.push({id:2, nombre:"Producto 2", Descripcion:"xx", Precio:10});
productos.push({id:3, nombre:"Producto 3", Descripcion:"xx", Precio:10});
productos.push({id:4, nombre:"Producto 4", Descripcion:"xx", Precio:10});
productos.forEach((element) => console.log(element));
};
generarProductos();

 