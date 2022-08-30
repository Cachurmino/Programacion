import Catalogo from "./catalogo.js";

const obtener_api = async () => {
  const productos = await fetch(
    `https://fakestoreapi.com/products${
      document.getElementById("slt_categoria").value
    }`
  );
  const lista_productos = await productos.json();

  let catalogo = new Catalogo(lista_productos);
  catalogo.mostrar_cards();
};

document
  .getElementById("slt_categoria")
  .addEventListener("change", obtener_api);
