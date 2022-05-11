/* // así se define arreglo
 var arreglo = [0,1,2,3];
 var otroArreglo = ['gato', 'perro', 'conejo'];

//  Así definimos un arreglo anidado
   var arregloAnidado = [ [1,2,3] , [4,5,6] , [7,8,9] ];

/*   arreglo              [ [1,2,3] , [4,5,6] , [7,8,9] ];
   índice                   0          1         2        posiciones
   sub-índice              0 1 2     0 1 2     0 1 2      posiciones
*/


//  console.log (otroArreglo[1]);           
// arregloAnidado[2][1];                  primero índice y luego sub índice
//  console.log (arregloAnidado [2][1]); */





var pokemones = [
    ['Gyarados', 'Agua', 130],
    ['Dragonite', 'Dragon', 149],
    ['Mewtwo', 'Psíquico', 150]
];


// creamos variables que traen el id de html
var miImagen = document.getElementById('imagen');
var miNombre = document.getElementById('nombre');
var miTipo = document.getElementById('tipo');
var miPoder = document.getElementById('poder');
var numero = prompt("elije número del 0 al 2");


// insertar texto dentro del elemento htmil
miImagen.innerHTML = '<img src="img/' + pokemones[numero][0] + '.png">';
miNombre.innerText = 'pokemon:' + pokemones[numero][0];
miTipo.innerText = 'tipo: ' + pokemones[numero][1];
miPoder.innerText = 'poder: ' + pokemones[numero][2];


