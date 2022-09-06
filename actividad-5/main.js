//ACTIVIDAD 1
import Casa from "./casa.js";

const obtener_casa = async () => {
  const casas = await fetch(
    `https://www.dolarsi.com/api/api.php?type=valoresprincipales`
  );
  const lista_casas = await casas.json();

  let casa = new Casa(lista_casas);
  casa.mostrar_tabla();
};

obtener_casa();

//ACTIVIDAD 2
//Ejercicio A
let criptos = [
  "Bitcoin",
  "Ethereum",
  "Tether",
  "BNB",
  "Cardano",
  "Dai",
  "Helium",
  "Shiba Inu",
  "Tron",
  "Cronos",
  "Solana",
];

//Ejercicio B
criptos.unshift("Stellar");

//Ejercicio C
let indice = criptos.indexOf("Shiba Inu");
criptos.splice(indice, 2);

//Ejercicio D
criptos.pop("Gate");

//Ejercicio E
const mostrar_parrafo = () => {
  document.getElementById("p_parrafo").innerHTML = `
  Longitud ${criptos.length}<br>
  Ultimo Elemento ${criptos[criptos.length - 1]}<br>
  Cripto Moneda: ${criptos[criptos.indexOf("Helium")]}<br>`;
};

document
  .getElementById("btn_parrafo")
  .addEventListener("click", mostrar_parrafo);

//Ejercicio F
const mostrar_lista = () => {
  let filas = [];
  criptos.forEach((element) => {
    let fila = `<li class="list-group-item">${element}</li>`;
    filas.push(fila);
  });
  document.getElementById("list_monedas").innerHTML = filas.join("");
};

document.getElementById("btn_lista").addEventListener("click", mostrar_lista);

//ACTIVIDAD 3
const framework = {
  titulo: "Framework utilizado en la actualidad",
  nombre: "Angular",
  características: {
    lenguaje: "TypeScript",
    patron: "MVVM",
    spa: "si",
  },
};

const mostrar_objeto = () => {
  const { titulo, nombre } = framework;
  const { lenguaje, patron, spa } = framework.características;

  console.log(`
    Titulo: ${titulo}
    Nombre: ${nombre}
    Lenguaje: ${lenguaje}
    Patron: ${patron}
    SPA: ${spa}
  `);
};

document.getElementById("btn_objeto").addEventListener("click", mostrar_objeto);
