const instrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = [49, 99, 69, 89];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

dados[2]("Ford");
dados[1][2].cor; // azul

const carros = new Array("Ford", "Fiat", "Honda");

carros[2] = "Porshe";
carros[3] = "Pegot";
carros[20] = "Xesqdele";
// do item 3 até o item 20 (vão ficar 16 espaços vazios)
console.log(carros.length);

const li = document.querySelectorAll("li");
const arrayLi = Array.from(li);

console.log(li);
console.log(arrayLi);

const obj = {
  0: "Andre",
  1: "Rafael",
  2: "Teste",
  length: 3,
};

const objArray = Array.from(obj);
// PARA CONSEGUIRMOS TRANSFORMAR UM OBJETOS QUE SE PARECEM COM UMA ARRA EM UMA ARRAY
//PRECISAMOS COLOCAR NO FINAL O (LENGTH) É OBRIGATORIOO!!!
// SE NÃO CONSTRUIR ASSIM VAI DAR UMA ARRAY VAZIA!!!

const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];
console.log(frutas[2][0].length);
// LEMBRE-SE SEMPRE DAS ARRAYS DENTRO DAS ARRAYS QUE SÃO SUPER NORMAIS, POREM VOCÊ PRECISA ESTAR LIGADO
// NA HORA DE CONTAR SOBRE O TOTAL DE ARRAYS!!!

const instrumentos2 = ["Guitarra", "Baixo", "Violão"];
instrumentos2.sort();
// O SORT VAI ORGANIZAR A ARRAY (QUE CONTEM STRINGS), EM ORDEM ALFABETICA!!!
const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();
// JÁ COM NÚMEROS ELA VAI ORGANIZAR POR NÚMERAL ORGANIZAR TODOS QUE TEM O NÚMERO 1 NA FRENTE 1/1/1/1 DEPOIS 2/2/2/2 DEPOIS 3/3/3/3
console.log(instrumentos2);
console.log(idades);

const carros2 = ["Ford", "Fiat", "VW"];
carros2.unshift("Kia", "Ferrari"); // ADICIONA NO COMEÇO!!!
carros2.push("Hyundai", "Porsh"); // ADICIONA NO FINAL!!!

//console.log(carros2);
//console.log(carros2.push("Hyundai", "Porsh")); // JÁ SE DEMOS O CONSOLE LOGO NO PUSH OU NO UNSHIFT VAI RETORNAR O LENGTH!!!!

//console.log(carros2.pop()); // no log vai dar o porsh (que é o ultimo carro, porem quando usamos o console.log(na array completa, o porsh vai estar removido))
//console.log(carros2);

//console.log(carros2.shift()); // no log vai dar o Kia (que é o primeiro carro, porem quando usamos o console.log(na array completa, o Kia vai estar removido))
//console.log(carros2);

//console.log(carros2.reverse()); // o reverse vai mudar a array ao contrario, vai começar de trás para frente!!!!!!
// e vai modificar quando a gente dar no console carros2 dnv, vai já está modificada com o reverse

console.log(carros2);
console.log(carros2.splice(2, 2, "Fusca")); // aqui no log ele retorna os itens que forem removidos!!!!
console.log(carros2);

console.log(["Item1", "Item2", "Item3", "Item4", "item5"].copyWithin(2, 0, 3));
// a partir do item 2, eu quero fazer uma copia, começando do item 0 e indo até o item 3!!

console.log(["Item1", "Item2", "Item3", "Item4"].fill("Banana"));

const transporte1 = ["Barco", "Aviao"];
const transporte2 = ["Carro", "Moto"];
const transportes = transporte1.concat(transporte2, "Xesqdele");
console.log(transportes);

const linguagens = ["html", "css", "js", "php", "python", "js"];

let htmlString = "<h2>Título Principal</h2>";
htmlString = htmlString.split("h2");
htmlString = htmlString.join("h1");

console.log(htmlString);

const linguagens2 = ["html", "css", "js", "php", "python"];

console.log(linguagens2.slice(2,4));
