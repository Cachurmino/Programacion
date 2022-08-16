export default class Vehiculo {
  marca = "";

  constructor(km) {
    this.kilometraje = km;
  }

  mostrar_km() {
    alert(this.kilometraje);
  }

  mostrar_marca() {
    alert(`La Marca Es ${this.marca}`);
  }
}
