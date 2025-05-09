// Retorne um número aleatório
// entre 1050 e 2000
let valorMin = 1050;
let valorMax = 2000;

let numeroAleatorio =
  Math.floor(Math.random() * (valorMax - valorMin + 1)) + valorMin;

console.log(`o número aleatório é ${numeroAleatorio}`);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
const arrayNumeros = numeros.split(", "); // vai transformar a string em uma Array, para podermos transformar em Number e manipular
const numeroMaximo = Math.max(...arrayNumeros); //esses 3 pontinhos vai passar por cada item da array, estilo um ForEach

console.log(numeroMaximo);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace("R$ ", "").trim().replace(",", ".");
  // para conseguirmos transformar os R$, tudo em maiusculo
  // para tirarmos o R$, limpar os espacos, e trocar a virgula por o (. ponto)
  preco = +preco.toFixed(2);
  // para conseguirmos arredondar o valor!!
  return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limparPreco(preco);
});

console.log(soma);
console.log(soma.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
// para transformar o valor em VALOR DO REAL BRASILEIRO!!!!
limparPreco(listaPrecos[1]);

// para tirarmos o R$, limpar os espacos, e trocar a virgula por o (. ponto)
// porque só com o ponto você consegue manipular para trocar uma string por number
// com virgula é impossível transformar string em number.