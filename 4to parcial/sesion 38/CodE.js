/* 
Eventos

cualquier cosa que suceda en el documento

- contenido sea leido
- contenido sea cargado
- usuario muve raton
- usuario pulsa una tecla
- usuario cierra una ventana
- lista muy larga de eventos: https://developer.mozilla.org/es/docs/Web/Events

Sintaxis

Element.addEventListener('event', callback)

Escuchador de eventos: que evento quueremos escuchar y que va a ejecutar: callback: funcion que dipara al ocurrir evento
*/

/* 
localizar elementos cin ID
*/

const button = document.getElementById('button');
const box = document.getElementById('box');
const input = document.getElementById('input');

/* 
eventos de raton

click: pulsar boton izq
db click: pulsar dos veces segudas boton izq

mouseenter: enramos ala zona de evento
mouseleave: salimos de la zona de evento
mousedown: pulsamos boton izq en la zona de evento
mouseup: soltamos boton izq en zona de evento
mousemove: movemos raton en zona de evento
*/

// button.addEventListener('click', () => console.log("pulsaste un click"));
// button.addEventListener('dbclick', () => console.log('diste doble click'));

// box.addEventListener('mouseenter', () => console.log('entraste'));
// box.addEventListener('mouseleave', () => console.log('saliste'));

// box.addEventListener('mousedown', () => console.log('puchaste'))
// box.addEventListener('mouseup', () => console.log('despegaste'))
// box.addEventListener('mousemove', () => console.log('te mueves'))

/* 
eventos de teclado

keydown: pulsamos tecla
keyup: soltamos tecla
keypress: pulsamos tecla y no la soltamos
*/

// input.addEventListener('keydown', () => console.log('pulsaste una tecla'));
// input.addEventListener('keyup', () => console.log('soltaste una tecla'));
// input.addEventListener('keypress', () => console.log('mantiene presionado'));