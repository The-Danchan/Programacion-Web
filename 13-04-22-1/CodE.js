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
    pokemones.push([nombre.value, tipo.value, poder.value]);
    var i = pokemones.length - 1;
    mensaje.innerHTML = 'Se agregó ' + pokemones[i][0];
}


function mostrarPokemones(){
document.write(
    '<ul>' +
    '<li><img src="IMG/' +  pokemones[0][0] + '.png" alt="Imagen Pokemon"></li>' +
    '<li>pokemon: ' + pokemones[0][0] + '</li>' +
    '<li>tipo: ' + pokemones[0][1] + '</li>' +
    '<li>poder: ' + pokemones[0][2] + '</li>' +
    '</ul>'
    );
}