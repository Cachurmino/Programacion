//Ejemplo 1
let helados = [
  "Banana Split",
  "Menta Granizada",
  "Cereza",
  "Dulce de Leche",
  "Granizado",
  "Pistacho",
];

let helados_Largos = helados.filter((element) => element.length > 9);

alert(helados_Largos);

//Ejemplo 2
let edades = [12, 5, 8, 130, 44];

function filtrar_edades(element) {
  return element >= 10;
}

let filtrado = edades.filter(filtrar_edades);

alert(filtrado);
