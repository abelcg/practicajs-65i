/* document.write('Elemento 1 <br>');
document.write('Elemento 2 <br>');
document.write('Elemento 3 <br>');
document.write('Elemento 4 <br>');
document.write('Elemento 5 <br>');
document.write('Elemento 6 <br>');
 */

/* 
 while (condicion logica){

    código que quiero ejecutar varias veces
    
    variable p/cambiar la condición lógica

 }

*/

//let contador = 21;
/* let contador = 1;

while (contador <= 20) {
  document.write('Elemento' + contador + '<br>');
  //contador = contador + 2;
  contador++;
} */

/* 
 do {
     código a ajecutar al menos una vez
        
     variable p/cambiar la condición lógica

 } while (condición lógica)

*/


//let cont = 19;
/* let cont = 50;

do {
    // código a ajecutar al menos una vez y cuanttas más mientras se cumpla la condición
    document.write('Elemento' + cont + '<br>');
    //cont = cont - 1
    cont--

} while (cont >=20);
 */

//for 

/* 

 for(define una variable; condicion logica, incrementao o decremental) {
    código que quiero ejecutar varias veces mintras se cumpla la condición
 }

*/

for (let i = 1; i <= 20; i++) {
    document.write('Estructura for vuelta ' + i + '<br>');
}

//los string son iterables, es decir, se pueden recorrer y su indice empieza en 0

//iterar o recorrer un string

let verduras = "tomates y lechugas";

//cantidad de caracteres o la longuitud del mismo

console.log(verduras.length);

//mostrar en pantalla letra por letra de una palabra

for(let c = 0; c < verduras.length; c++){
    document.write(verduras.charAt(c) + "<br>");
}
