/* 
modelo de objeto de documento DOM
- Toda la estructura HTML
- 99% de las veces que usamos JS interactuamos con DOM
- DOM no es JS
- DOM se considera un API (aplication program interface)
- DOM viene integrado en navegador y se puede usar con JS

NODOS
Cada parte del documento es un nodo, aunque tecnicamente los elementos son objetos, para JS cada parte del arbol es un nodo
Hay varios tipos de nodos: 12, los mas usados son:
- Elemnet node: cualquier etiqueta html -1
- Text node: contenido de etiqueta -3
- Comment node: cualquier comentario html -8

Cualquier consulta para saber el  tipo de nodo, nos devuleve un numero 

Acceder a DOM desde navegador
- Se utilizan DevTools
- Seleccionar etiqueta que queremos consultar
- En consola: comando: $0 Despliega propiedades del nodo (solo funciona en navegador no en JS)

Consultar H1
>> $0 // nodo del h1
>> $0 .id // "title"
>> $0.className // "title"
>> $0.textContent // "DOM"
>> $0.nodeType // 1

Consultando contenido de h1
>> $0.childNodes // NodeList
>> $0.childNodes[0] // #text "DOM"
>> $0.childNodes[0].length // 27
>> $0.childNodes[0].data // "DOM"
>> $0.chidNodes[0].nodeType // 3

Consultar a comentario
>> $0 // <!--  <p> Soy un comentario </p> -->
>> $0.textContent // "<p> Soy un comentario </p>"
>> $0.length // 28
>> $0.nodeType // 8

*/