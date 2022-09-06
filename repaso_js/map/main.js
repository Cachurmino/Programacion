//Primer paso crear un arreglo de prueba
let numeros = [1, 5, 10, 15];

let nuevo_Arreglo = numeros.map((element) => element * 2);

//Ejercicio
let valores = [1, 4, 9];

let raices = valores.map((element) => Math.pow(element, 0.5));

alert(raices);

//Mapear un array de objetos

let datos_personales = [
  {
    nombre: "A",
    apellido: "A",
  },
  {
    nombre: "B",
    apellido: "B",
  },
];

console.log(
  datos_personales.map((element) => `${element.nombre} ${element.apellido}`)
);
