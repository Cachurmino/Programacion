export default class Casa {
  constructor(lista_casas) {
    this.filas = [];
    lista_casas.forEach((element, index) => {
      let fila = `
        <tr>
            <td>${index + 1}</td>
            <td>${element.casa.compra}</td>
            <td>${element.casa.venta}</td>
            <td>${element.casa.agencia}</td>
            <td>${element.casa.nombre}</td>
            <td>${element.casa.variacion}</td>
            <td>${element.casa.ventaCero}</td>
            <td>${element.casa.decimales}</td>
        </tr>
        `;

      this.filas.push(fila);
    });
  }
  mostrar_tabla() {
    document.getElementById("tbl_body").innerHTML = this.filas.join("");
  }
}
