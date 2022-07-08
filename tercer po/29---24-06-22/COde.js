/* 
Funciones
fragmentos de código que se escriben para ejecutar una tarea y no volver a escribir lo mismo otras veces
modulariza codigo
solventa errores
deben realizar una sola tarea

sintaxus tradicional
function nombreFuncion (){
   códigoo a ejecutar
};

Es6
const nombreFuncion = () => {
    codigo a ejecutar
};

las funciones pueden reciviir parámetros entre los parentesis
(1,2,3)  estos se usan dentro de la funcion
pueden devolver valores y se usa la palabra "return"
...{
    return 1 + 2
}

las funciones tienen que ser invocadas
nombreFuncion()
*/

// tradicional
function saludar (){
    console.log('hola miciela');
}

saludar();

// tipo flecha
const despedir = () => {
    console.log('bye mireina');
}

despedir();

// flecha con parametros
const mensaje = (dia) => {
    console.log(`hoy es ${dia}`);
}

mensaje('viernes');
mensaje('sabado');
mensaje('domingo');