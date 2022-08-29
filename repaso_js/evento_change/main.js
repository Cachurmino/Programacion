function aplicar_descuento() {
  const precio = document.getElementById("inp_precio").value;
  const descuento = document.getElementById("slt_operar").value;

  const resultado_descuento = (precio * descuento) / 100;

  alert(precio - resultado_descuento);
}

document
  .getElementById("slt_operar")
  .addEventListener("change", aplicar_descuento);
