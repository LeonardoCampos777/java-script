const carros = ["Ford", "Fiat", "Honda"];

carros.forEach((item, index, array) => {
  console.log(item.toUpperCase(), index, array);
});

console.log(carros);

// FOREACHH!!!!!!!!!!!!
const li = document.querySelectorAll("li");

li.forEach((item, index) => {
  item.classList.add("ativo" + index);
});

const retornoForeach = li.forEach(function (item) {
  item.classList.add("ativa");
});

console.log(retornoForeach);
// O RETORNO DO FOREACH VAI SER SEMPRE UNDEFINED, PORQUE A GENTE NÃO ESTÁ iNTERESSADO NO QUE ESSE MÉTODO RETORNA
// MAS SIM ESTAMOS INTERESSADOS NO QUE ELE VAI FAZER!!! NA AÇÃO DELE!!!.

//MAP!!!!!

const carros2 = ["Corola", "Ferrari", "Golf"];

const novaArray = carros2.map((item, index, array) => {
  return item.toUpperCase();
});

const numeros = [2, 4, 5, 6, 78];
const numerosX2 = numeros.map((n) => n * 2); // o return está aqui invisível, quando o código é só de uma linha!!!

console.log(numeros);
console.log(numerosX2);

console.log(carros2);
console.log(novaArray);

// novaArray e Carros são duas arrays diferentes
// O MAP VAI SERVIR PARA QUANDO VOCÊ QUISER RETORNAR UMA ARRAY COM OS VALORES QUE VOCÊ TINHA (MODIFICADOS!!!!!)
// SEMPRE QUE VOCÊ PRECISAR DE UMA NOVA ARRAY A PATIR DAQUELA QUE VOCÊ TINHA ANTERIOR VOCÊ VAI USAR O MAP!!!
// CASO NÃO PRECISE DE UMA NOVA ARRAY, VOCÊ VAI USAR O FOREACH!!!!

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];
// aqui está tudo abreviado
const tempoAulas = aulas.map((aula) => aula.min); // quando estiver tudo na mesma linha depois do (=>), automaticamente já vai estar o return invisivel.

// outro exemplo de fazer
function nomeAulas(aula) {
  return aula.nome;
}

const arrayNomeAulas = aulas.map(nomeAulas);

console.log(arrayNomeAulas);
console.log(tempoAulas);

// REDUCE!!!!!!!!!
// o reduce precisa retornar alguma coisa também!!
const aulas2 = [10, 25, 30];

const reduceAulas = aulas2.reduce((acumulador, item) => {
  return acumulador + item;
}, 0);

console.log(reduceAulas); // aqui ele vai retornar o valor FINAL  de todas as iterações, a soma TOTAL de todos os acumuladores.

// se a gente não passar o valor do ACUMULADOR QUE NO CASO É O (0), O REDUCE VAI CONTINUAR FUNCIONANDO
// POREM NÃO VAI FAZER A SOMA NA PRIMEIRA ITERAÇÃO, VAI PULAR A PRIMERA ITERAÇÃO
// QUANDO A GENTE PASSA O VALOR DO ACUMULADOR, VAI FAZER TODAS AS ITERAÇÕES!!

const numeros2 = [10, 25, 30, 3, 54, 33, 22];

const maiorNumero = numeros2.reduce((anterior, atual) => {
  if (anterior > atual) {
    return anterior;
  } else {
    return atual;
  }
}, 0);

console.log(maiorNumero);

// o anterior é igual a reduce!!
// o autal é igual ao item!!

const aulas3 = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const listaAulas = aulas3.reduce((acumulador, aula, index) => {
  acumulador[index] = aula.nome;
  return acumulador;
}, {});

console.log(listaAulas);

// por trás de tudo está acontecendo isso
// var acumulador= {}
// acumulador[0] = "HTML 1"  (ai vai fazer o loop até o ultimo objeto que no caso é a ula aula)

const frutas = ["Banana", "Pêra", "Uva"];

const frutasRight = frutas.reduceRight((acumulador, fruta) => {
  return acumulador + ", " + fruta;
});

console.log(frutas);
console.log(frutasRight);

// SOME = PELO MENOS 1 TRUE
const frutas2 = ["Banana", "Pêra", "Uva", "Uva sem semente"];

const uvaDiferente = frutas2.some((fruta) => {
  return fruta === "Uva sem semente";
});

// no some(),se pelo menos um returnda iteraçãofor thuthy,ele retorna true.

console.log(uvaDiferente);

function maiorQue100(numero) {
  return numero > 100;
}

const maiorNumero2 = [4, 12, 25, 54, 9, 3];

const temMaior = maiorNumero2.some(maiorQue100);
console.log(temMaior);

// vai dar false porque não existe número maior que 100 não

// EVERY  = TODOS ELES
const frutas3 = ["Banana", "Pêra", "", "Uva sem semente"];

const todasFrutas = frutas3.every((fruta) => {
  return fruta;
});

console.log(todasFrutas);

// se tiver algum (undefined), (null)vai dar false, ou caracter vazio "", também da false.

const numeros3 = [4, 5, 67, 12, 53, 14];

const maiorQue3 = numeros3.every((n) => n > 3); //quando usamos apenas 1 linha o return está ali escondido

console.log(maiorQue3);

//FINDINDEXX
const frutas4 = ["", "Banana", "Pêra", "Uva sem semente"];

const indexUva = frutas4.findIndex((fruta) => {
  return fruta === "Uva sem semente";
});

const indexUva2 = frutas4.find((fruta) => {
  return fruta;
});

console.log("Index:", indexUva); // retorna 2 o número do index do item uva sem semente.
console.log(indexUva2); // vai retonar o item quando o loop começar e achar esse tal item.

//FILTER
// NO FILTER A ITERAÇÃO NÃO ACABA QUANDO CHEGAR NO TRUE OU NO FALSE. A ITERAÇÃO CONTINUA ATÉ PASSAR POR TODOS OS ITENS DA ARRAY
// AO TERMINAR ITERAÇÃO POR A ARRAY COMPLETA AI SIM, ELA VAI RETOANR UMA ARRAY, SÓ COM OS VALORES TRUE
// TUDO QUE FOR FALSE, VAI SER EXCLUIDO

const frutas5 = ["Banana", undefined, null, "", "Uva", 0, "Maçã"];

const arrayLimpa = frutas5.filter((fruta) => {
  return fruta;
});

console.log(arrayLimpa);

const numeros4 = [23, 32, 1, 27, 46];

const buscarMaior23 = numeros4.filter((n) => n > 23);

console.log(buscarMaior23);

const aulas4 = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const maiores15 = aulas4.filter((aula) => {
  if (aula.min > 15) {
    return aula.nome;
  }
});

console.log(maiores15);
