// Crie uma função que verifique
// corretamente o tipo de dado

function verificarDado(dado) {
  return Object.prototype.toString.call(dado);
}

console.log(verificarDado([]));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {};

Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true,
  },
});
console.log(quadrado);
// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

console.log(configuracao);
Object.freeze(configuracao);

console.log(Object.isFrozen(configuracao));

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
const propiedadesPrototipoString = Object.getOwnPropertyNames(
  String.prototype
);
const propiedadesPrototipoArray = Object.getOwnPropertyNames(
  Array.prototype
);

console.log(propiedadesPrototipoString);
console.log(propiedadesPrototipoArray);
