export default class Cliente {
  /*Bob El*/ constructor(nombre1, apellido1, dni1) {
    this.nombre = nombre1;
    this.apellido = apellido1;
    this.dni = dni1;
  }
  mostrar_datos() {
    alert(this.nombre);
    alert(this.apellido);
    alert(this.dni);
  }
}
