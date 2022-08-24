const obtener_usuario = async () => {
  const usuarios = await fetch("https://jsonplaceholder.typicode.com/users");

  const lista_usuarios = await usuarios.json();

  let filas = [];
  lista_usuarios.forEach((element,index) => {
    let fila = `<tr>
        <td>${index+1}</td>
        <td>${element.name}</td>
        <td>${element.username}</td>
        <td>${element.email}</td>
        <td>${element.website}</td>
    </tr>`;

    filas.push(fila);
  });

  document.getElementById("tbl_body").innerHTML=filas.join("");
};

obtener_usuario();
