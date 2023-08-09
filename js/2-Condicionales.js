//Estructuras condicionales

// estructura if

/* 

if (condicion logica){

    codigo a ejecutar cuando la condicion sea verdadera
}

*/

let numero = '8';

let number = 8;


//comparacion no estricta, no le da importancia al tipo de dato solo a su valor
/* if (numero == number){
    console.log('son iguales');
}

//comparacion estricta, compara que coincidan el tipo de dato y su valor
if (numero === number){
    console.log('son estrictamente iguales');
} else {
    console.log('no son estrictamente iguales');
}
 */
/* 
let saludo = 'hola';
let despedida = 'chau';

if (saludo === despedida) {
    console.log('Son el mismo saludo');
} else {
    console.log('Son distitos saludos');
}
 */

let edadPablo = 59;
let edadMarcos = 45;
let edadMaria = 70;

if (edadMarcos > edadPablo && edadMarcos > edadMaria){
    document.write('Marcos es el mayor')
} else if (edadPablo > edadMarcos && edadPablo > edadMaria){
    document.write('Pablo es el mayor')
} else {
    document.write('Maria es la mayor')
}

//OR (||) Con solo una de las dos condiciones true devuelve true
// AND (&&) Ambas condiciones deben de ser true para que devuelva true la comparación 
