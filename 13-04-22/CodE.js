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

var agregar= document.getElementById('agregar');
agregar.addEventListener('click', agregarpokemon);


function agregarpokemon(){
    pokemones.push([nombre.value, tipo.value, poder.value]);
}