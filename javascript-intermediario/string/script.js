//const comida = 'Pizza';
//const agua = new String('Água');

//console.log(comida.length);
//console.log(agua.length);

//const frase = 'A melhor comida';

//console.log(frase[frase.length - 1]);
//console.log(frase.charAt(2));

const frase = "A melhor linguagem é";
const linguagem = " Javascript";

const fraseFinal = frase.concat(linguagem, "!!!!!");

const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false

console.log(listaFrutas.includes(fruta, 14));

console.log(fruta.startsWith("Ba"));

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

console.log(transacao1.slice(1, 5));

console.log(fruta.lastIndexOf("na"));

const preco = "R$ 99,00";

const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach((item) => {
  console.log(item.padStart(20, "."));
});

const frase2 = "Tá";

console.log(frase2.repeat(4));

let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
listaItens = listaItens.replace(/[ ]+/g, ", ");
console.log(listaItens);
// essa (/[ ]+g) é uma regular expression, logo mais iremos aprender mais sobre ela. e é usada para conseguir concatenar todos os espaços
// de forma GLOBAL.
// se não usar ela, só vai funcionar no primeiro espaço que ela encontrar!!!

let preco2 = "R$ 1200,43";
preco2 = preco2.replace(",", ".");

const arrayLista = listaItens.split(", "); // ele REMOVE E QUEBRA  oque a gente passar primeiro, e depois da (, virgula) ele adiciona oque a gente passou

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
const novoHtml = htmlArray.join("section");
// o JOIN SERVE PARA JUNTAR A ARRAY EM SÓ UMA STRING ( SE NÃO PASSARMOS NADA DENTRO)
// JÁ SE PASSARMOS ALGO DENTRO DELE, ELE VAI JUNTAR TUDO E COLOCAR OQUE PASSAMOS DENTRO NO FINAL DE CADA STRING

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

const frutasArray = ["Banana", "Melancia", "Laranja"];

const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

console.log(sexo2.toUpperCase() === "FEMININO");


const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'

