/* 
ciclo for y ciclo in
ciclos determinados de ES6.

Simplifican ciclo for tradicional:
for(i=0; i<3; i++){
    código que se ejecuta
}

Los nuevos ciclos permiten recorrer estructuras de datos como arrays y objectos

For Of
for(variable of estructura){
    código que se ejecuta
}


For In
for(variable in estructura){
    codigo que se ejectuta
}


la variable en los paréctesis toma el siguiente valor de la estructura en cada interación
no es necesario especificar número de iteraciones
el bucle se incrementa solo
el bucle se detiene automaticamente
    */


let pokemones = ['pikachu', 'charmander', 'snorlax'];

// for
/* for(i=0; i<3; i++){
  console.log(pokemones[i])
}
 */


/* // for of
for (let nombre of pokemones){
  console.log(nombre);
}
// imprime cada valor de cada posicion de la estructuta */


/* // for in
for (let numero in pokemones){
  console.log(numero);
}
// trae el índice del valor de la esctructura */




