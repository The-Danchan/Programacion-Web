// número de pokemones que se quieren
var numero= prompt("¿Cuánta merca va a querer? sólo números :0");

// declarar ciclo
// declarar array "sin datos"
var pokemones= [];
for(var i=0; i < numero; i++){
    var pokemon = prompt("nombra al pokemon");
    // push para agregar dato en array de arriba
    pokemones.push(pokemon);
    document.write(pokemones[i] + " yo te elijo! <br>");
}



// escribir valor de pokemones
document.write("Tienes " + numero + " pokemones en el carrito");