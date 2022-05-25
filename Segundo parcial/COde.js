var nombre = prompt("¿Cómo se llama compa?");
var edad = prompt("¿Cuál sería tu edad este año?");
var actual = 2022;
var futuro = 2050;
var nacimiento = actual - edad;
var edadFuturo = futuro - nacimiento;

document.write("Hey " + nombre + " ahora tienes  " + edad + " entonces para el 2050 vas a tener " + edadFuturo + " años no manches ya re viejo mano");