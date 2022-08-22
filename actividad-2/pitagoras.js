export default class Pitagoras {
  opuesto = "";
  adyacente = "";
  constructor() {}

  mostrar_hipotenusa() {
    document.getElementById(
      "h4_hipotenusa"
    ).textContent = `Resultado: ${Math.sqrt(
      Math.pow(parseInt(this.opuesto), 2) +
        Math.pow(parseInt(this.adyacente), 2)
    )}`;
  }
}
