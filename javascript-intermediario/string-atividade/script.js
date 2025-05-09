// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: " R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: " R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: " R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: " R$ 129",
  },
  {
    descricao: "Recebimento de Taxa Cliente",
    valor: " R$ 49",
  },
];
let totalTaxa = 0;
let totalRecebimento = 0;
transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace("R$ ", "");

  if (item.descricao.slice(0, 4) === "Taxa") {
    totalTaxa += numeroLimpo;
  } else if (item.descricao.slice(0, 4) === "Rece") {
    totalRecebimento += numeroLimpo;
  }
});

console.log(`o valor total da taxa é ${totalTaxa}`);
console.log(`o valor total do recebimento é ${totalRecebimento}`);
// no número limpo ele está limpando o R$, para que o número fique puro (NUMBER)
// e não como uma string, então COM O REPLACE tudo que for R$, ele vai substituir por nada
// depois temos que colocar o (+) na frente, para que seja transformado
// essa string em (UM NUMBER).
// depois ele vai verificar se a descrição começa (for igual) a ("TAXA")
// se realmente começar ele vai pegar a taxaTotal vai começar um loop
// com o taxaTotal + o número limpo
// e no final também vamos verificar o valor do recebimentoTotal
// usando o else if e usando o SLICE com o === "Rece"
// só iremos verificar se for o começo da descriação for igual a "RECE"

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

const transportesArray = transportes.split(";");
console.log(transportesArray);

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.replace(/[span]+/g, "a");
console.log(html);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";

console.log(frase.slice(-1));

// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let taxasTotal = 0;
transacoes2.forEach((item) => {
  item = item.toLowerCase();
  item = item.trim();
  item = item.slice(0, 4);

  if (item === "taxa") {
    taxasTotal++;
  }
});

console.log(taxasTotal);