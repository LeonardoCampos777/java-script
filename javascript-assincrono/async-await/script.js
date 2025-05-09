async function puxarDados() {
  const responseDados = fetch("./dados.json"); //o (AWAIT) serve para resolver a response!!!!
  const responseClientes = fetch("./clientes.json");

  const jsonDados = await (await responseDados).json();
  const jsonClientes = await (await responseClientes).json();

  console.log(jsonDados);
  console.log(jsonClientes);
}
puxarDados();

async function iniciarAsync() {
  await new Promise((resolve) => {
    setTimeout(() => resolve(), 2000);
  });
  console.log("Depois de 2s");
}
iniciarAsync();