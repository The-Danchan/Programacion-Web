/* 
Target

se puede usar para delegar eventos y que a traves de un lemento padre, escuchar elementos de hijos
*/

/* 
const one = document.getelementById('one');
const two = document.getelementById('two');
const three = document.getelementById('three');
*/

// one.addEventListener('click', (e) => console.log(e.target.textContent));
// two.addEventListener('click', (e) => console.log(e.target.textContent));
// three.addEventListener('click', (e) => console.log(e.target.textContent));

const container = document.getElementById('container');

// container.addEventListener('click', (e) => console.log(e.target));
// container.addEventListener('click', (e) => console.log(e.target.textContent));
container.addEventListener('click', (e) => e.target.classList.add('color'));