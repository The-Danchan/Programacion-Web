/* var miArray =['dato 1', 'dato 2', 'dato 3'];
var arrMulti = [
    ['dato 1', 'dato 2', 'dato 3'], 
    ['dato 1', 'dato 2', 'dato 3'], 
    ['dato 1', 'dato 2', 'dato 3']
]; */


var pokemones=[];

var nombre = document.getElementById('nombre');
var tipo = document.getElementById('tipo');
var poder = document.getElementById('poder');
var mensaje = document.getElementById('mensaje');


var agregar= document.getElementById('agregar');
agregar.addEventListener('click', agregarpokemon);

var mostrar = document.getElementById('mostrar');
mostrar.addEventListener('click', mostrarPokemones);


function agregarpokemon(){
    if(nombre.value, tipo.value, poder.value === ''){
        mensaje.innerHTML = 'Oye mijo, primero typea en los campos :7';
    } else{
        pokemones.push([nombre.value, tipo.value, poder.value]);
    var i = pokemones.length - 1;
    mensaje.innerHTML = 'Se agregó ' + pokemones[i][0];
    };
    
}


function mostrarPokemones(){
    if(pokemones.length === 0){
        mensaje.innerHTML = 'no chavo...metale datos :/';
    }else{
        for(var d = 0; d<3; d++ ){
            document.write(
                '<ul>' +
                '<li><img src="IMG/' +  pokemones[d][0] + '.png" alt="Imagen Pokemon"></li>' +
                '<li>pokemon: ' + pokemones[d][0] + '</li>' +
                '<li>tipo: ' + pokemones[d][1] + '</li>' +
                '<li>poder: ' + pokemones[d][2] + '</li>' +
                '</ul>'
                );
        }
    }

} 


// ciclo for - hacer repeticiones de cod
// condicional if
