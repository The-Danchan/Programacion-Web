/* 
acceder a objetos a traves de getElementById y ID
*/

const titulo = document.getElementById('.title');
console.log(titulo);

/* 
atributos
element.getAttribute('attribute'): devolver atributo que tenga declarado en la etiqueta html
element.setAttribute('attribute','value'): modifica valor de atributo
*/

// console.log(titulo.getAttribute('class'));

// titulo.setAttribute('id','big-title');
// console.log(titulo);

/* 
clases
element.classList.add('class', 'class', ...): añade 1 o más clases
element.classList.remove('class', 'class', ...): elimina 1 o más clases
element.classList.contains('class'): devuelve true si tiene la clase o flase si no la tiene
*/

titulo.classList.add('big-title', 'red-title');
titulo.classList.remove('main-title', 'red-title');

console.log(titulo);
// console.log(titulo.classList.contains('main-title'));

/* 
if (titulo.classList.contains('red-title')){
    console.log('si lo tiene')
}else{
    console.log('estas perdido')
} */

// titulo.classList.replace('big-title', 'small-title');
// console.log(titulo);

/* 
Atributos directos
id 
className
nodeName
textContent
innerHtml
*/

/* console.log(titulo.id); // title
console.log(titulo.className); // main-title
console.log(titulo.nodeName); // h1
console.log(titulo.nodeType); // 1
console.log(titulo.hidden); // flase
console.log(titulo.textContet); // DOM
console.log(titulo.innerHtml); // DOM */

/* 
atributos "anidados"
*/

// console.log(titulo.firstChild.nodeValue);
// console.log(titulo.firstChild.nodeType);
// console.log(titulo.firstChild.isConnected);

/* 
atributos nodeList
*/

console.log(titulo.childnodes[0])
console.log(titulo.childnodes[0].length)
console.log(titulo.childnodes[0].nodeName)

console.log(titulo.childnodes[1])
console.log(titulo.childnodes[1].textconetnt)
console.log(titulo.childnodes[1].hidden)
console.log(titulo.childnodes[1].nodeType)