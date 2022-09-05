//Creamos un arreglo
let lenguajes = ["Java", "Python", "JavaScript", "C++", "Visual Basic", "Go"];

//Longitud de un arreglo
lenguajes.length;

//Acceder al ultimo elemento de un arreglo
lenguajes[lenguajes.length - 1];

//agregar un elemento al final del arreglo
lenguajes.push("Php");

//Eliminar el ultimo elemento
lenguajes.pop();

//Agregar elemento al comienzo
lenguajes.unshift("C#");

//Eliminar elemento al comienzo
lenguajes.shift();

//Encontrar el indice y mostrarlo
let num = lenguajes.indexOf("JavaScript");

//Como eliminar un elemento
let num1 = lenguajes.indexOf("C++");
let eliminados = lenguajes.splice(num1, 2);

//Agregar elementos dentro del arreglo
lenguajes.splice(num, 0, "Visual Basic");

//Copiar un Arreglo
let copia = lenguajes.slice();
copia.push("Ruby");
alert(lenguajes);
alert(copia);
