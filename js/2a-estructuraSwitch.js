//switch: se usan para reemplazar los if else cuando tenemos muchos de estos
//varias opciones para elgir

/* 
 switch(opcion) {
   case 1: 
         //lo que quiero que se ejecute para ese caso
   break
   case 2: 
         //lo que quiero que se ejecute para ese caso
   break
   ......

   default 
         ejeucta una condicón por defecto
 }

*/

//Permitir que el usuario elija su estación del año favorita

let estacion = prompt(
  'Ingrese su estación favorita según su número o nombre, por ej 1-verano, 2-otoño, 3-primavera, 4-invierno'
);
console.log(estacion);
switch (estacion.toLowerCase()) {
    case '1':
    case 'verano':
            document.write('su estación favorita es verano')
       break;
    case '2':
    case 'otoño':
            document.write('su estación favorita es otoño')
        break;
    case '3':
    case 'primavera':
            document.write('su estación favorita es primavera')
        break;
    case '4':
    case 'invierno':
            document.write('su estación favorita es invierno')
        break;

    default:
        alert("ingrese una opción valida")
        break;
}

