'use strict'

var  params = process.argv.slice(2);
//console.log(params);
var num1 = parseFloat(params[0]);
var num2 = parseFloat(params[1]);
if(num2 > 0)
{
  var plantilla =`
  La suma es: ${num1+num2}
  La resta es: ${num1-num2}
  La division es: ${num1/num2}
  La multiplicacion es: ${num1*num2}
  `;

  console.log(plantilla);
}else{
  var plantilla =`
  La suma es: ${num1+num2}
  La resta es: ${num1-num2}
  No se puede dividir entre 0
  La multiplicacion es: ${num1*num2}
  `;

  console.log(plantilla);
}


//console.log("Hola mundo con NODE JS");
