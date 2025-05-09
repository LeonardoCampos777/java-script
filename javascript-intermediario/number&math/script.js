console.log(Number.isNaN(NaN));
console.log(Number.isInteger(10.1992));

console.log(parseFloat("338785"));
console.log(parseFloat("100.27 reais")); // ele corta oque tiver de caractere de letras
console.log(parseInt("100.27 reais", 10)); // esse (10) é o radix, não serve para nada só para mostrar que estamos usando números na casa decimal
console.log(parseInt(23.49, 10)); // arredonda tanto para baixo tanto para cima, pra cima a partir do .50 ou mais, pra baixo 49 ou menos.

const preco = 10.32323;
console.log(preco.toFixed()); // Arredonda o número com base no total de casas decimais do argumento.

let valor = 48.49;
valor = valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
// Formata o número de acordo com a língua e opções passadas.
// da para fazer igual a esse exemplo de converter o número para a moeda do país escolhido.
console.log(valor);

const aleatorio = Math.floor(Math.random() * 100); // isso é muito bom para fazer sorteios ou algo do tipo

console.log(aleatorio);
