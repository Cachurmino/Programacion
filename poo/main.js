import Vehiculo from "./vehiculo.js";

//FORMA 1
function ejecutar() {
  let km = document.getElementById("inp_km").value;

  let vehiculo = new Vehiculo(km);
  vehiculo.mostrar_km();
}

document.getElementById("btn_mostrar").addEventListener("click", ejecutar);

//FORMA 2
const mostrar_marca = () => {
  let vehiculo = new Vehiculo();
  vehiculo.marca = document.getElementById("slt_marca").value;
  vehiculo.mostrar_marca();
};

document.getElementById("btn_aceptar").addEventListener("click", mostrar_marca);
