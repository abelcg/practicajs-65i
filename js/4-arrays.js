//arrays o arreglos

//crear o definir un array vacio de forma literal

let arreglo = [];

//crear o definir un array con datos de forma literal

let series = ['Naruto', 'Juegos de Tronos', 3, 4, true];

console.log(series);

//definir un array vacio usando el constructor de arrays

let array = new Array();

//definir un array vacio usando el constructor de arrays

let array2 = new Array(1, 2, 8, 5);

console.log(array2);

let array3 = [1, 2, 3];

//obtener o mostrar un elemento del array

console.log(array3[5]);

//cantidad de elementos del array

console.log(array3.length);

//obtener o mostrar el último elemento del arreglo

console.log(array3[array3.length - 1]);

//reasignar el valor a cualquier elemento del array

array3[0] = 4;

console.log(array3);

array3[5] = 'hola';

console.log(array3);

console.log(array3.length);

//agregar elemntos en la última posición del array

array3.push('chau');

console.log(array3);

//sacar o eliminar del array el último elemento

array3.pop();

console.log(array3);

//agregar elemntos en la primera posición

array3.unshift('martes');

console.log(array3);

//sacar o eliminar del array en la primera posición

array3.shift();

console.log(array3);

//agregar elementos en una determinada posicion

array3.splice(3, 0, 5);

console.log(array3);

//agregar elementos en una determinada posicion sin modificar el array original

//let newArray = array3.toSpliced(4, 0, 6, 7);

//console.log(newArray);

//eliminar el elementos en una determinada posicion

array3.splice(4, 2);

console.log(array3);

//eliminar todos los elementos desde una determinada posicion

array3.splice(1);

console.log(array3);

//agregar elementos en una determinada posicion sin eliminar ninguno

array3.splice(1, 0, 3, 2, 1);

console.log(array3);

//seleccionar elementos de una array

console.log(array3.slice(1, 3));

//recorrer y/o mostrar los elementos del array

for (let i = 0; i < array3.length; i++) {
  console.log(array3[i]);
}

//recorrer y/o mostrar los elementos del array usando for..of

for (let elemento of array3) {
  console.log(elemento);
}

//recorrer y/o mostrar los elementos de un string usando for..of

let word = 'palabra';

for (let letra of word) {
  console.log(letra);
}

//operador spread

console.log(...array3);

console.log(...word);

// dado un arreglo de edades encontrar cual es la mayor

let edades = ['45', '12', '88', '41'];

console.log(Math.max(...edades));
console.log(Math.min(...edades));

//concatenar dos o mas arrays

console.log(array3.concat(edades));

//otra concatenar arrays es usanado el spread oprator
console.log([...array3, ...edades]);

//hacer una copia de un array

let copiaEdades = [...edades]

console.log(copiaEdades);

//convertir string a un array

console.log(word.split(''))

//otra forma de covertir string a un array

console.log(Array.from(word));

//covertir array a un string
let vocales = ['a', 'e', 'i', 'o', 'u'] 

console.log(vocales.join(''));

console.log(vocales.join(','));

//indexOf
//devuelve el indice o la posicion del 1er elemento que cumpla con la condición dada
//si no lo encuentra o no cumple devuelve -1

console.log(vocales)

console.log(vocales.indexOf('a'));

//includes
//saber si un elemnto esta incluido en el array
//retorna un booleano, true si esta incluido el elemnto y false si no lo esta

console.log(vocales.includes('a'));

