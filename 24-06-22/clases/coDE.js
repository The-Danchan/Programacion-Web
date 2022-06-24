/* 
Clases
estructura Es6, que funciona como plantilla de objetos o molde para crear objetos
cuando se crea un objecto a traves de juna clase se le denomina 'instancear' un objeto
para crear una clase se necesita de una funcion constructora. se llama obligatoriamente "constructor" y se ejecuta cada vez que instanciamos un objeto
palabra resrrvada class + nombreClase
- cuando definimos clase la primera letra va en mayus
- parametros entre parentesis, son las propiedades a tener los objetos
- para asignar parámetros se usa la palabra "this", esta propiedad se le asigna x parametro
estamos asociando las propiedades del objeto con los valores que enviamos por parametros

class Pokemon {
   constructor (nombre, tipo, poder){
    this.nombre = nombre
   }
  //aquí van los métodos (funciones)    
}


Métodos
funcion asociada los objetos, dentro de clase pero fuera del constructo

pokedex(){
    return`Este es {this.nombre}`
}

no se usa la palabra reservada function en este caso, tampoco flecha. esta es la  sintaxis de uh metodo dentro de una clase


crear un objecto
usar palabra reservada "new" + nombre de la clase

const pikachu = new Pokemon ('pikachu', 'eléctrico', 1000);


una vez instanciado el objeto, se pueden acceder asus propiedades y metodos usando la nomenclatura de punto '.'
pikachu.nombre;
pikachu.poder;
pikachu.tipo;
pikachu.pokedex();

*/



class Pokemon {
    constructor (nombre, tipo, poder){
    this.nombre = nombre
    this.tipo = tipo
    this.poder = poder
    }
    pokedex (){
        return `Este es ${this.nombre} es un pokemon tipo ${this.tipo} con un poder de ${this.poder}`
    }
}

const pikachu = new Pokemon ('pikachu', 'eléctrico', '1000');
const gyarados = new Pokemon ('gyarados', 'agua', '20000');

console.log(pikachu);
console.log(gyarados);

console.log(pikachu.pokedex());
console.log(gyarados.pokedex());