/* 
Objeto de eventp
vive siempre y cuando haya evento
Se recomienda utilizar letra 'e' y pasa como parametro del callback o la funcion
utilizado para analizar y navegar a traves de nodos
*/

/* 
Traemos elementos conID
*/

const input = document.getElementById('input');
const button = document.getElementById('button');

/* 
agregamos escuchador de evento y usamos el objeto 'e' para observar y acceder a sus propiedades 
*/

// input.addEventListener('keydown', (e) => console.log(e));
// input.addEventListener('keydown', (e) => console.log(e.key));
// input.addEventListener('keydown', (e) => console.log(e.shiftkey));

// button.addEventListener('click', (e) => console.log(e));
// button.addEventListener('click', (e) => console.log(e.type));
button.addEventListener('click', (e) => console.log(e.target.childNodes[0].textConetnt));