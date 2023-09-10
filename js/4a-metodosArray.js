//Callbacks: son funciones que se psan o envían por parametro de una función
//También llamadas funciones de 1er orden
//callback: llamado a la función

//Metodo sort

let abecedario = ['c', 'a', 'd', 'f', 'z', 'x', 'e', 'i', 'o', 'b'];

console.log(abecedario.sort());

let vocales = ['E', 'I', 'A', 'U', 'O'];

console.log(vocales.sort());

let letras = ['E', 'i', 'o', 'A', 'U', 'O', 'a', 'e'];

console.log(letras.sort());

let numeros = [-37, 11, -2, 15, -26, 52, 48, 78, 8, 105, 257];

console.log(numeros);

console.log(numeros.sort());

console.log(numeros);

//métodos mutables: son los que cambian al arreglo original

// sort muta al array original

console.log(
  numeros.sort(function (a, b) {
    return a - b;
  })
);

// si quiero que ordene de mayor a menor en el return b-a

//Tarea: en un curso queremos ordenar los alumnos alfabeticamente para tomar asistencia

let students = [
  'Juan',
  'Carlos',
  'Carla',
  'Ezequiel',
  'Ana',
  'Omar',
  'Soe',
  'Abel',
];

const orderStudents = (array) => {
  let studentsOrdered = array.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  return studentsOrdered;
};

console.log(orderStudents(students));

console.log(orderStudents(students).reverse());

//Reverse

let palabras = ['hola', 'chau', 'buen día'];

console.log(palabras.reverse());

//Ejemplo: si ingresa una palabra por ej 'hola' ---> 'aloh'

const revertirPalabras = (palabra) => {
  return palabra.split('').reverse().join('');
};

console.log(revertirPalabras('hola'));

//Tarea
/* 
Métodos básicos de arreglos
Declara un array que vamos a llamar “clasificaciones” 
con los siguientes valores: Ana, Oswaldo, Raúl, Celia, María, Antonio 
(vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)
Imprime la clasificación actual
El concurso continua, y se van modificando esas posiciones anteriores. Debemos cambiar en el array:

Celia adelanta a Raúl
Antonio es descalificado y se elimina del concurso
Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
Hay una nueva participante que pasa a encabezar la clasificación: Marta
Imprime la clasificación actualizada y comprueba que se ha hecho correctamente

*/

let clasificaciones = ['Ana', 'Oswaldo', 'Raúl', 'Celia', 'María', 'Antonio'];
//Imprime la clasificación actual

console.log(clasificaciones);

//Celia adelanta a Raúl

/* clasificaciones[2] = 'Celia'

clasificaciones[3] = 'Raúl' */

clasificaciones.splice(2, 2, 'Celia', 'Raúl');

console.log(clasificaciones);

//Antonio es descalificado y se elimina del concurso

clasificaciones.pop();

console.log(clasificaciones);

//Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden

clasificaciones.splice(1, 0, 'Roberto', 'Amaya');

console.log(clasificaciones);

//Hay una nueva participante que pasa a encabezar la clasificación: Marta

clasificaciones.unshift('Marta');

//Imprime la clasificación actualizada y comprueba que se ha hecho correctamente
console.log(clasificaciones);

//Eliminar concursante conociendo su posición

const eliminarConcursante = (arr, name) => {
  let posicion = arr.findIndex((concursante) => {
    return concursante === name;
  });

  if (posicion > -1) {
    arr.splice(posicion, 1);
  } else {
    console.log('No se encontró ningún concursante');
  }
};

eliminarConcursante(clasificaciones, 'Celia');

console.log(clasificaciones);

//método filter
//es mutable: modifica el array original

// ejemplo: devuelve un array de nros pares y positivos

let pares = numeros.filter((num) => {
  return num % 2 === 0 && num > 0;
});

console.log(pares);

//ejemplo: nros mayores a 10

let mayor10 = numeros.filter((numero) => numero > 10);

console.log(mayor10);

//Ejercicio: Filtrar de un lista de personas los nombres que contengan la letra 'm'
//contemplar los casos en que los que la letra 'm' sea mayuscula y en los casos donde
// se ingresa espacios al comienzo o final de la letra

//trim(): metodo de string que elimina los espacios (strings vacios) al inicio y final de la
// cadena de caracteres

let personas = [
  'Joaquin',
  'Abel',
  'Mariano',
  'Emmanuel',
  'Mirta',
  'Ambar',
  'Horacio',
];

const nombresFiltrados = (letra, personas) => {
  let nombres = personas.filter((nombre) =>
    nombre.toUpperCase().trim().includes(letra.toUpperCase().trim())
  );

  return nombres;
};

console.log(nombresFiltrados('m', personas));

//nos puede servir para hacer un buscador

//find
//devuelve el primer elemento q cumpla con al condición dada o undefined

let alumnos = [
  'Juana',
  'Pedro',
  'Carla',
  'Pablo',
  'Juan',
  'Juan Cruz',
  'Juan Pablo',
];

let resultadoBusqueda = alumnos.find((alumno) => alumno === 'Juan');

resultadoBusqueda;

//Métodos inmutables

//map --> devuelve un nuevo array con los resultados de aplicar un llamado a la función (callback)
//a cada uno de  los elementos del array

numeros;

let numerosDobles = numeros.map((num) => num * 2);

numeros;
numerosDobles;

//map sirve para hacer una copia o 'clon del array original

let copyStudents = students.map((student) => student);

copyStudents;
students;

//forEach --> no muta el arreglo original y no genera un nuevo array
//si quiero guardar / copiar en un nuevo array uso map, si no uso forEach
//forEach nos permite también recorrer el array aplicando una funcion a cada elemento

students.forEach((student) => {
  let nameToUpperCase = student.toUpperCase();
  console.log(nameToUpperCase);
});

//concatenar dos arryas
//unir dos arrays usando spread operator

let arrayJoin = [...students, ...numeros];

arrayJoin;

//Some --> devuelve true si encuentra un alemento q cumpla con la condicion dada, si no false

let fruits = ['🍎', '🍇', '🍐', '🍌'];

console.log(fruits.some((fruit) => fruit === '🍎'));

//fill --> llena el array con lo que le pase por parametro

let apples = ['🍎', '🍇', '🍐', '🍌'];
apples.fill('🍎');

//every --> devuelve true si todos los elemntos cumplen con la condición dada, si no false

console.log(apples.every((apple) => apple === '🍎'));

//reduce: método que me deveulve un valor resultado de aplicar a cada elemnto un callback
//Devuelve el acumulador

let numbers = [1, 2, 5, 6, 10];

let sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum);

//usando reduce generar un array con elemntos únicos

let array = [18, 8, 9, 18, 18, 3, '4'];

let arrayClone = [...array];

arrayClone;

console.log(array.includes(18));

let uniqueArray = array.reduce(
  (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
  []
);

uniqueArray;

//Tarea: Encontrar el elemento más grande de un array iterando una sola vez

const getBiggest = (array) =>
  array.reduce((acc, item) => (acc > item ? acc : item));

const result = getBiggest([50, -1500, 10, 100, 155]);

result;

//Tarea: Generar una función que iterando una sola vez una rray elimine todos los
// undefined, false, 0, null, '', y devuelva un array sin estos
// [false, '', 8, 'Hola', undefined, null, 77] ---> [8, 'Hola', 77]

//undefined,false, 0, null, '' se evaluan como false

const clean = (arr) => {
  return arr.reduce((acc, val) => {
    if (val) {
      acc.push(val);
    }
    return acc;
  }, []);
};

const cleaned = clean([1, undefined, null, 0, 2, '151', '', 'hola', false, 55]);

cleaned;

//generar un array de elementos unicos usando filter e indexOf

let arreglo = [5, 8, 8, 556, '77', 'hello', 'word', 'hello', '🍉', '🍉'];

let elementosUnicos = arreglo.filter((item, index)=> arreglo.indexOf(item) === index)

elementosUnicos;
