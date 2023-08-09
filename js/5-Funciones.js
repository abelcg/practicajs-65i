// declarar una funcion

/* 
 function nombreFuncion(){
    codigo que se ejecutara
 }

*/

function holaMundo() {
  console.log('hola mundo, como estas?');
}

//invocar, ejecutar, llamar a una función
holaMundo();

//funciones con parámetros

/* 
function nombreFuncion(parametro1, parametro2){
    codigo que se ejecutara
 }

*/

//let apellido = 'Gomez'

function saludar(nombre, apellido = 'Gomez') {
  console.log(`hola ${nombre} ${apellido}, como estás?`);
}

saludar('Abel', 'Perez');

//funciones que nos retornan un valor

function convertirDolaresPesos(dolares) {
  let pesos = dolares * 580;
  //siempre la última linea de la función es la del return, despues del return no
  //hay que escribir ningún código más
  return pesos;
}

let precioCelular = convertirDolaresPesos(200);
console.log(precioCelular);
console.log('el precio de la play 5 es ' + convertirDolaresPesos(1000));

//ejemplo de funciones con parámetros

function sumarValores(valor1, valor2) {
  if (typeof valor1 !== 'number' || typeof valor2 !== 'number') {
    console.error('debe ingresar un valores numericos');
  } else {
    return `${valor1} + ${valor2} = ${valor1 + valor2}`;
  }
}

console.log(sumarValores(1, 2));

console.log(sumarValores(4, 'hola'));

//funciones flecha o arrow fuctions

//para definirla hay que asignarla a una variable, que puede ser let o const,
// pero por logral se unsa const

/* 
 const nombreFuncion = () => {
    código a ejecutar
 }
*/

/* const sumar = (num1, num2) => {
    return num1 + num2;
} */

//permiten obviar las { } y el return

const sumar = (num1, num2) => num1 + num2;

console.log(sumar(8, 5));

//scope: es el alcance (donde vale o existe una variable)
//en el caso de función las variables que estan definidas dentro de ella
//nacen y mueren dentro de ese bloque que es la función

let heroe = 'Batman';

function mostrarHeroe() {
  let heroe = 'Superman';
  console.log(heroe);
  return `Bienvenido ${heroe}`;
}

console.log(mostrarHeroe());

console.log(heroe);

//funcion anonima: función sin nombre

const square = function (num) {
  //Math.pow() calcula potencias de un numero
  return Math.pow(num, 2);
};

//invocar una función dentro de otra función

const sumSquare = (num1, num2) => square(num1) + square(num2);

console.log(sumSquare(2, 5));

//Tarea: Realizar una función que nos permita
//realizar las operaciones de suma, resta, multiplicacion y division

const calculadora = (valor1, valor2, operador = '+') => {
  if (typeof valor1 !== 'number' || typeof valor2 !== 'number') {
    console.error('debe ingresar un valores numericos');
  }

  switch (operador) {
    case '+':
      return `${valor1} + ${valor2} = ${valor1 + valor2}`;
    case '-':
      return `${valor1} - ${valor2} = ${valor1 - valor2}`;
    case '*':
      return `${valor1} * ${valor2} = ${valor1 * valor2}`;
    case '/':
      return valor2 !== 0 ? `${valor1} / ${valor2} = ${valor1 / valor2}` : 'Ingrese un valor distinto de cero' ;

    default:
      return 'Ingrese un operador valido';
  }
};

console.log(calculadora(5, 0, '/'));

//operador ternario es una forma sinteta de escribir un if else
// condLogica ? codigo cuando la cond sea true : código cdo sea false
