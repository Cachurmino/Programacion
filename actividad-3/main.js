import Cripto from "./cripto.js";

const obtener_cripto = async () => {
  const monedas =
    await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
  `);
  const lista_monedas = await monedas.json();

  let cripto = new Cripto(lista_monedas);
  cripto.mostrar_tabla();
};

obtener_cripto();
