// Ejercicio tomado de: https://faheemkhan97.hashnode.dev/the-mysterious-this-keyword-lets-demystify-it

/*
* 1. this en el contexto global
* En el navegador, 'this' se refiere al objeto window
* En NodeJS, this se refiere el objeto global se llama 'global object'
*/
console.log("\n******************* 'this'en el contexto global")

console.log("Esto es true en el navegador: this === window", this === window); // la salida debe ser true

/*
* 2. this dentro de funciones
* El valor de 'this' dentro de una función depende de cómo se llama esa función
* Hay 4 formas de llamar una función
*/
console.log("\n******************* 'this' dentro de funciones")


// 2a. llamar una función directamente. 
// El valor de 'this' dentro de la función es el objeto window

function foo1(){
    console.log("'this' dentro de función standalone (llamada directamente): this===window", this === window) // true
}
foo1();

// 2b. llamar una función directamente. 
// Si se usa 'use strict', el valor de 'this' es undefined
function bar(){
 'use strict'
    console.log("'this' dentro de función standalone (llamada directamente) usando 'use strict' this===window", this) // undefined
}
bar();

// 2c. llamar a una función en el contexto de un objeto. 
// Cuando una función es una propiedad de un objeto y la llamamos como object.funcion()
// En este caso, el valor de 'this' hace referencia al objeto que fue usado para llamar a la función
const person1 = {
  name: "Faheem",
  sm:"Twitter",
  foo2: function(){
      return this;
  }
}

console.log("'this' en la función person1.foo2() === person1:", person1.foo2() === person1); // true


// 2d. llamar a una función en modo constructor
// El valor de 'this' es el objeto que está siendo construido

function Student(name, roll, course){
    this.name = name;
    this.roll = roll;
    this.course = course;
}

const student1 = new Student("Wilt", 1011, ['Flutter', 'Dart']);
console.log("En la función constructora se usó 'this' para asignar las propiedad student1.name: ",student1.name); // "Wilt"



// 2e. llamar a una función usando la propiedad funcion.call()
//
function foo3(){
    console.log("Esta función se llamó usando la propiedad foo1.call(): ","I'm foo");
}
foo3.call(); // Output "I'm foo"

// Cuando se llama la propiedad funcion.call(), se puede enviar un objeto la propiedad call()
// Dentro de esa función, 'this' apuntará al objeto que fue pasado como argumento
function foo4(){
    console.log("Se ejecutó con foo4.call(). Se recibió un objeto person2. this.name es igual a ",this.name); //si llamamos a foo.call(objeto), 'this' hace referencia al objeto que recibió como parámetro 
}
const person2 = {
  name:"Wilt",
  sm:"digital"
}
foo4.call(person2); // Se envía un objeto person2. output "Wilt"


/*
* 3. this dentro de una función flecha
* Las funciones flecha no tienen su propio valor de 'this'
* El valor de 'this' dentro de una función flecha es equivalente al valor de 'this' de su contexto externo.
* De otra forma, la función de flecha "presta" el valor de 'this' del contexto padre
*/
console.log("\n******************* 'this' dentro de una función flecha")

const obj = {
  name:"Wilt",
  sm:"digital",
  bio: () => this === window
}
console.log("La función de flecha obj.bio() imprime this===window ",obj.bio()); // true


// Este es otro ejemplo
// 
const person3 = {
  myname:"Wilt",
  sm:"digital",
  bio: function(){
          setTimeout(() => {
          console.log("setTimeout this.myname",this.myname);
      }, 0)
  },
}
console.log("La función person3.bio() es una función normal. setTimeout es una función flecha y presta su contexto de bio(). 'this' apunta a person3 e imprime la propiedad person3.name: ");
person3.bio(); //output "Wilt"


//Otro ejemplo
  const person4 = {
  myname:"Wilt",
  sm:"digital",
  bio: function(){
          setTimeout(function(){
          console.log("setTimeout this.myname",this.myname);
      }, 0)
  },
}
console.log("La función person3.bio() es una función normal. setTimeout es una función normal y crea su propio contexto. 'this' apunta a su contexto pero no existe la propiedad person4.name: ");
person4.bio(); //Output undefined








