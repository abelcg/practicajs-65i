let nombre = 'Abel';
let apellido = 'Córdoba';
let email = 'abel@hmail.com';
let dni = 32164598;

//definir o declarar un objeto en forma literal.

let usuario = {
  //clave: valor | key: value  (las claves se les llama propiedades)
  nombre: 'Abel',
  apellido: 'Córdoba',
  email: 'abel@gmail.com',
  dni: 321645498,
  /* roles: ['admin', 'superUser', 'moderador'],
  cursos: {
    nombre: 'Fullstack',
    esPresencial: false,
  } */
  //métodos

  saludar() {
    return `Hola mi nombre ${this.nombre} ${this.apellido}`;
  },
  isLogged() {
    return true;
  },
};

//definir o declarar un objeto vacio en forma literal

let objVacio = {};

//mostrar el objeto en documento

//document.write(usuario);

//mostrar por consola el objeto

console.log(usuario);

//mostrar una propiedad del objeto: forma 1 - nombreObjeto.propiedad

document.write('El nombre del usuario es: ' + usuario.nombre);

//mostrar una propiedad del objeto: forma 2 - nombreObjecto['propiedad']

document.write('<br>El apellido del usuario es: ' + usuario['apellido']);

//Si queremos aplicar un bucle a un objeto por ej un for..of --> nos dirá que no es un iterable

/* for(const prop of usuario){
  console.log('hola');
}
 */

//Podemos usar en cambio for..in

document.write('<h5>Usuario</h5>');

for (const prop in usuario) {
  document.write(`<br> ${prop} : ${usuario[prop]}`);
}

//mostrar un objeto usando un bucle for tradicional

const mostrarObjeto = () => {
  //usando el metodo keys de Object obtengo un array cons usus claves

  let claves = Object.keys(usuario);
  console.log(claves.length);

  document.write('<h5>Usuario</h5>');

  for (let i = 0; i < claves.length; i++) {
    let clave = claves[i];
    let valor = usuario[clave];
    //obtengo el nombre de  c/u de la claves y con ellas puedo obtener c/u de sus valores

    document.write(`<br>${clave}: ${valor} `);
  }
};

mostrarObjeto();

//mostrar el objeto usando su arrays de keys con for...of

let keys = Object.keys(usuario);

for (const key of keys) {
  const value = usuario[key];
  console.log(key, value);
}

//mostrar solo los valores del objeto usando el método values --> devuelve un array de valores

console.log(Object.values(usuario));

//mostrar el objeto usando su array de keys y mapeando el mismo

const mapObjt = Object.keys(usuario).map((key) => {
  const value = usuario[key];
  console.log(key, value);
});

//mostrar el objeto usando el método entries ---> devuelve un array de arrays formado con los pares key value

Object.entries(usuario).map((entry) => {
  const [key, value] = entry;
  console.log(key, value);
});

//modificar una propiedad

usuario.nombre = 'Pepe';

mostrarObjeto();

//agregar una nueva propiedad

usuario.roles = ['admin', 'superUser', 'moderador'];
mostrarObjeto();

console.log(usuario.roles);

//eliminar una propiedad

delete usuario.dni;

mostrarObjeto();

//métodos son las cosas cosas que puede hacer un objeto, sus acciones
// y la forma de relacionarse con otros objetos
//Son propiedades cuyos values son dunciones anonimas

//llamar o invocar un método: nombreObjeto.metodo()

console.log(usuario.saludar());
console.log(usuario.isLogged());
