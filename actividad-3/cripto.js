export default class Cripto {
  constructor(lista_monedas) {
    this.filas = [];
    lista_monedas.forEach((element, index) => {
      let fila = `<tr>
            <td>${index + 1}</td>
            <td><img src="${element.image}"></td>
            <td>${element.name}</td>
            <td>${element.symbol}</td>
            <td>${element.current_price}</td>
            <td>${element.total_volume}</td>
        </tr>`;

      this.filas.push(fila);
    });
  }
  mostrar_tabla() {
    document.getElementById("tbl_body").innerHTML = this.filas.join("");
  }
}
