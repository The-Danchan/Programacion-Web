var c1 = document.getElementById('color1');
var c2 = document.getElementById('color2');
var c3 = document.getElementById('color3');

var colores =[];

var okay = document.getElementById('ok');
okay.addEventListener('click', guardardatos);

function guardardatos(){
    colores.push(c1,c2,c3);
    document.write("Ok mano, tus colores favoritos serían " + colores);
}
