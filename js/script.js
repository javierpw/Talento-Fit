console.log("Que tengas un buen dia");
let valor1 = parseInt(prompt("Ingrese el primer valor","0"));
console.log("Se ingresó:"+valor1);
let valor2 = parseInt(prompt("Ingrese el 2do valor","0"));
valor2 = parseInt(prompt("Ingrese el 2do valor","0"));
console.log("Se ingresó:"+valor2);
let valorD  = parseInt(prompt("Ingrese valor de comparación",""));

//CONTROLES
if (!isNaN(valor1) )
{
  console.log("El primer valor es numero");
}
if (!isNaN(valor2) )
  {
    console.log("El segundo valor es numero");
  }
  if (!isNaN(valorD) )
    {
      console.log("El valor de comparacion es numero");
    }

console.log("la suma de los nros es: "+ (valor1+valor2));

if (valorD > (valor1+valor2))
{
  document.write("el nro final es MAYOR q la suma");
}
else{document.write("el nro final es MENOR q los nros sumados");}

document.write("Gracias por su atención");
