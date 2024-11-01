console.log("Que tengas un buen dia")
let nombre = prompt("Cual es tu nombre?","");
document.write("Bienvenido "+nombre);
console.log("se ingreso: "+nombre);
let edad = prompt("Cuanto años tenes?","");
if (isNaN(edad))
{
  console.log("no es un numero");
}
else
{
  console.log("SI es numero");
}
edad = parseInt(edad);
