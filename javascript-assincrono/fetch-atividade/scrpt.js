// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const input = document.querySelector(".input");
const btnCep = document.querySelector(".btnCep");
const resultadoCep = document.querySelector(".resultadoCep");

function handleClick(event) {
  event.preventDefault();
  const cep = input.value;
  buscarCep(cep);
}

function buscarCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.text())
    .then((corpo) => {
      resultadoCep.innerText = corpo;
    });
}

btnCep.addEventListener("click", handleClick);

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const valorBitcoin = document.querySelector('.valorBitcoin');

function valueBtc(){
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then((corpo) =>{
    valorBitcoin.innerText = 'o valor do Bitcoin no Brasil está. R$ ' + corpo.BRL.buy;
  })
}
valueBtc()
setInterval(valueBtc, 1000 * 30);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const piadaRandom = document.querySelector('.piadaRandom');
const btnPiada = document.querySelector('.btnPiada');

function newPiada(event){
  event.preventDefault();
  ativarPiada()
}

function ativarPiada(){
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then((corpo) =>{
    console.log(corpo.value)
    piadaRandom.innerText = corpo.value;
  })
}
btnPiada.addEventListener('click',newPiada);