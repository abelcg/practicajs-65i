//Clases son como moldes de objetos
//Podemos crear o instanciar objetos a partir de su clase
//Si queremos abstraerni a la hora de crear usuarios, alumnos, etc vemos que tiene en común
// que son peersonas => podemos crear la clase Persona y luego a aprtir de ella crear
// objetos más especificos como ser usuarios, alumnos, mentores, tutores.

/* function Person(){
    this.name = 'John',
    this.lastName = 'Doe',
    this.age = 48
}
 */

//Es importante que el nombre de la calse se escriba la primera letra en mayúscula

class Person {
  //es la función constructor. Es la 1er método que se ejecuta cdo creo un obj por medio de la clase
  //por parámetro le paso todas las propiedades q tendrá el objeto a crear
  constructor(nombre, apellido, edad, dni, email, tel) {
    (this.name = nombre),
      (this.lastName = apellido),
      (this.age = edad),
      (this.dni = dni),
      (this.email = email),
      (this.tel = tel);
  }

  //los métodos se define fuera del constructor

  greet() {
    return `Hello, Im ${this.name} ${this.lastName}`;
  }

  showData() {
    document.write(`<h5>Person: ${this.name}</h5>
                        Name: ${this.name}
                        <br>Lastname: ${this.lastName}
                        <br>Age: ${this.age}
                        <br>dni: ${this.dni}
                        <br>email: ${this.email}
                        <br>Tel: ${this.tel}

        `);
  }

  //Propiedades conmutadas o getters y setters
  // get sirven para mostrar las porpiedades del objeto

  get showName() {
    return this.name;
  }

  get showLastname() {
    return this.lastName;
  }

  //a continuacion de los getters se definien los setters
  // set me sirve para modificar propiedades de un objeto

  set updateName(newName) {
    this.name = newName;
  }

  set updateLastname(newLastname) {
    this.lastName = newLastname;
  }
}

//Instanciar o crear un objeto: se usa la palabra new seguido del  nombre de la clase
//es importante respetar el orden de lo parámetros que se le pasa al constructor

const Pepe = new Person(
  'Pepe',
  'Argento',
  54,
  5668556,
  'pepearg@gmail.com',
  541154588625
);

console.log(Pepe);

//invocamos el método que se encuetra en su clase

console.log(Pepe.greet());
Pepe.showData();

Pepe.name = 'Jose';

console.log(Pepe);

//utilizando las propiedades conmutadas.
//usando getter

document.write('<br><br>' + Pepe.showName + ' ' + Pepe.showLastname);

//usando setters

Pepe.updateName = 'Pedro';
Pepe.updateLastname = 'Picapiedras';

Pepe.showData();

//Herencia: se heredan propiedades y métodos

class Alumno extends Person {
  //constructor toma todos los parámetros de su cosntrcutor padre, agregando sus propios parámetros
  constructor(
    nombre,
    apellido,
    edad,
    dni,
    email,
    tel,
    curso,
    comision,
    coutaDia
  ) {
    //invoca al constructor de la padre padre llamando al método super()
    super(nombre, apellido, edad, dni, email, tel);
    this.curso = curso;
    this.comision = comision;
    this.coutaDia = coutaDia;
  }

  //si invoco shoData sin definirla la busca en su clase padre y muestra hasta sus propiedades
  //si quiereo que muestre comision, curso, coutaDia necesito SOBRE-ESCRIBIR (overwrite) el método en la clase hija

  showData() {
    document.write(`<h5>Person: ${this.name}</h5>
                        Name: ${this.name}
                        <br>Lastname: ${this.lastName}
                        <br>Age: ${this.age}
                        <br>dni: ${this.dni}
                        <br>email: ${this.email}
                        <br>Curso: ${this.curso}
                        <br>Comision: ${this.comision}
        `);
  }

  //definimos los getters y setters de las porpiedades del objeto hijo. No hace falta definir para las prop heredadas

  get mostrarCurso() {
    return this.curso;
  }
  get mostrarComision() {
    return this.comision;
  }

  set modificarCurso(nuevoCurso) {
    this.curso = nuevoCurso;
  }
}

//crear o instanciar un alumno

let Marcelo = new Alumno(
  'Marcelo',
  'Pereyra',
  38,
  32456885,
  'marcep@gmail.com',
  5438154585,
  'Fullstack',
  '65i',
  true
);

console.log(Marcelo);

Marcelo.showData();

//crear clase Mentor

class Mentor extends Person {
  constructor(
    nombre,
    apellido,
    edad,
    dni,
    email,
    tel,
    comision,
    legajo,
    antiguedad
  ) {
    super(nombre, apellido, edad, dni, email, tel);
    this.comision = comision;
    this.legajo = legajo;
    this.antiguedad = antiguedad;
  }

  showData() {
    document.write(`<h5>Person: ${this.name}</h5>
                        Name: ${this.name}
                        <br>Lastname: ${this.lastName}
                        <br>Age: ${this.age}
                        <br>dni: ${this.dni}
                        <br>email: ${this.email}
                        <br>Comision: ${this.comision}
                        <br>Legajo: ${this.legajo}
                        <br>Antiguedad: ${this.antiguedad}
        `);
  }

  //getter y setter
}

let Abel = new Mentor(
  'Abel',
  'Cordoba',
  36,
  32245988,
  'abel@gmail.com',
  38415455,
  '65i',
  454545,
  2
);

console.log(Abel);

Abel.showData()


//Polimorfismo: el mismo nombre del método con respuestas diferentes dependiendo del objeto por el cual se invoca


