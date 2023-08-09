console.log('Hola mundo');
// Comentario de una sola línea----> continua el comentario
console.log('Despues del comentario');

/* 
Comentario de varias lineas

Aquí sigue estando comentado
*/

console.log('Texto de "prueba"');

//escribir y mostrar mensajes en el documento

// document.write('Hola mundo');

// definición (asignación, inicialización) de una variable

let numero = 5; //el signo = se llama operador de asignación
console.log(numero);

let numero2 = 8;
console.log(numero2);

numero2 = numero; //reasignar una variable

console.log(numero2);

// al definir una variable su nombre no debe tener caracteres especiales (ñ, @, ~ <, -)  sin acentos

let anio = 2023;

let anio_pasado = 2022;

let nombreApellido = 'Pepe Argento'; //notación camelcase

// constantes

const palabra = 'hola';

//las constantes son inmutables es decir no se puede reasignarle su valor
console.log(palabra);

// palabra = 'chau';

console.log(palabra);

// scope: el ambito donde vale la variable

// var numero = 10; 

// no usar var 


// tipos datos

// tipo de dato: string

let stringVacio = ""

let numberString = "8"

console.log(numberString);

let numberString2 = "10"

console.log(numberString2);

// document.write(numberString + numberString2);
//en caso de los string el signo + se llama signo de concatenacion y concatenar es unir

//document.write("<br>" + numberString + " "  + numberString2 );

//Tipo de dato number

let num = 45;

let number = 100;

//document.write(number + num) // para tipo number el signo + es operador de suma

// Tipo de dato booleano

let verdadero = true; 

console.log(verdadero);

let falso = false;

console.log(!verdadero); //el signo ! es operador de negacion 

let comision = '65i'

document.write('<br>Comision: ' + comision);

//mostrar un mensaje de alerta al usuario

alert("Mensaje de alerta")
