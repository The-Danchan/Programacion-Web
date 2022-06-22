/* 
Estructuras de datos que representan  propiedades, valores y acciones.

Propiedades:
características de objeto 
se representan por pares de "clave" (key) : "valor" (value)

'.'
nombreObjeto.key
*/



const pokemon = {
    nombre : 'Pikachu', 
    poder : 1000,
    capturado : true,
    habilidades : ['Impactrueno','ataque rápido']
}

/* console.log(pokemon);
console.log(pokemon.nombre);
console.log(pokemon.poder);
console.log(pokemon.capturado);
console.log(pokemon.habilidades);
console.log(pokemon.habilidades[0]); */

// Ciclo For in
for(let key in pokemon){
  console.log(key)
}
// para objetos


for(let value in pokemon){
    console.log(pokemon[value])
}




// ciclo for of
for(let key of pokemon.habilidades){
    console.log(key)
}
// más bien para arrays