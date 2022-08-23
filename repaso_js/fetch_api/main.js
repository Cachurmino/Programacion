function mostrar_objeto() {
  let cliente = {
    nombre: `Pepito`,
    apellido: `Pozzo`,
    dni: 49254095,
    correo: {
      outlook: `elpepardo@outlook.com`,
      gmail: `pepito@gmail.com`,
      yahoo: `pepozzo@yahoo.com.ar`,
    },
  };
  const { outlook, gmail, yahoo } = cliente.correo;

  console.log(`
  Correos de pepito
  
  Outlook: ${outlook}
  Gmail: ${gmail}
  Yahoo: ${yahoo}
  `);
}
mostrar_objeto();

//Creamos funcion flecha

const consumir_api = async () => {
  //Realizamos una solicitud HTTP a traves del metodo GET para obtener las publicaciones JSON mediante la funcion nativa de JavaScript fetch
  const publicaciones = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const publicaciones_definitivas = await publicaciones.json();

  let items_totales = [];
  publicaciones_definitivas.forEach((element) => {
    let item = `<li class="list-group-item">${(element.title)}</li>`;

    items_totales.push(item);
  });

  document.getElementById("lista_publicaciones").innerHTML =
    items_totales.join("");
};

consumir_api();
