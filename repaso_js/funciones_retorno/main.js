const calcular_tension = (a, b) => {
  const c = a * b;
  return c;
};

const operar = () => {
  let a = document.getElementById("inp_r").value;
  let b = document.getElementById("inp_i").value;
  alert(calcular_tension(a, b));
};

document.getElementById("btn_operar").addEventListener("click", operar);
