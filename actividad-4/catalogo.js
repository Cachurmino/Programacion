export default class Catalogo {
  constructor(lista_productos) {
    this.filas = [];
    lista_productos.forEach((element) => {
      let fila = `<div class="col-lg-3">
                    <div class="card" style="width: 15rem;">
                        <img src="${element.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${element.price} USD</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>`;
      this.filas.push(fila);
    });
  }
  mostrar_cards() {
    document.getElementById("row_tienda").innerHTML = this.filas.join("");
  }
}
