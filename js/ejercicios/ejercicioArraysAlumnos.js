/* 
Pedir por pantalla el nombre de 5 alumnos usando wl bucle while.
Guardarlos en un array llamado alumnos

Usando el arreglo de alumnos mostrar por consola por cada uno de los alumnos 
un mensaje de bienvenida.

*/

let alumnos = [];

while (alumnos.length < 5) {
    //let nombre = prompt('Ingrese el nombre de un alumno')
    alumnos.push(prompt('Ingrese el nombre de un alumno'))
}

console.log(alumnos);

for(let i = 0; i < alumnos.length; i++){
    console.log(`Hola ${alumnos[i]} bienvenido/a al curso de fullstack`);
}



