/* 
ID
document.getElementById('Id'): acceder a elemento por su ID
Los Id se escriben como strings '' o ""
Se recomienda que el elemento se aguardado en una constante

*/

const titulo= document.getElementById('title');
// console.log(titulo)
// console.log(titulo.textContent)

/* 
.textContent sirve para mostrar el contenido de texto y/o modificarlo
*/

// titulo.textContent ='Cambio de informacion';
// console.log(titulo.textContent);

/* 
selector CSS
document.querySelector('selectorCSS'): accede al primer elemento que coincida con el lector CSS
- los selectores se escriben como strings '' o ""
- se guardan en constantes
*/

// const title = document.querySelector('h1'); // Tag
// const title = document.querySelector('#title'); // ID
// const title = document.querySelector('.title');
// console.log(title)

/* 
acceso a traves de clases, pseudo clases y pseudo elementos
*/

// const parrafo = document.querySelector('.paragraph');
// console.log(parrafo.textContent);

// const parrafo = document.querySelector('.paragraph:nth-child(3)');
// console.log(parrafo.textContent);

// const parrafo = document.querySelector('.paragraph::after');
// no funciona con pseudo elementos
// console.log(parrafo.textContent)

/* 
tener acceso a traves de la sucesion Id y selectores CSS
*/

// const titulo = document.getElementBy('title').querySelector('span')
// console.log(titulo.textContent);

/* 
Todos los selectores
document.querySelectorAll('selectorCSS'): accede a todos los elementos que coincidan con el selector CSS
- devuleven un nodeList(lista de nodos)
- selectores se escriben como strings '' o ""
- hay que guardarlos en constantes
*/

// const parrafos = document.querySelectorAll('p'); // tag
const parrafos = document.querySelectorAll('.paragraph');
console.log(parrafos);

/* 
Index
*/

console.log(parrafos[0].textContent);
console.log(parrafos[1].textContent);
console.log(parrafos[2].textContent);