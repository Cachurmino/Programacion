import Pitagoras from "./pitagoras.js";

function guardar_catetos() {
  let pitagoras = new Pitagoras();
  pitagoras.opuesto = document.getElementById("inp_opuesto").value;
  pitagoras.adyacente = document.getElementById("inp_adyacente").value;
  pitagoras.mostrar_hipotenusa();
}

document
  .getElementById("btn_ingresar")
  .addEventListener("click", guardar_catetos);
