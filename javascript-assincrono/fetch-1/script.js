const teste = fetch('./teste.html');
const div = document.createElement('div');

teste.then((response) =>{
  return response.text();
})
.then((body) =>{
  div.innerHTML = body;
  const titulo = div.querySelector('h1');
  document.querySelector('h1').innerText = titulo.innerText;
  console.log(titulo)
})