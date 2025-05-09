const perimetro = new Function("lado", "return lado * 4");

console.log(perimetro(5));

function somar(n1, n2) {
  return n1 + n2;
}

console.log(somar.name.toUpperCase());

function darOi(nome, idade) {
  console.log("oi para você " + nome + idade);
}

darOi.call({}, "xesqdele", 25);

const carro = {
  marca: "fiat",
  ano: 1950,
};

function descricaoCarro() {
  return this.marca + " " + this.ano;
}

console.log(descricaoCarro()); // NÃO TEM A REFERÊNCIA
console.log(descricaoCarro.call()); // NÃO TEM A REFERÊNCIA
console.log(descricaoCarro.call(carro)); // TEM A REFERÊNCIA DO THIS, QUE NO CASO É O OBJETO CARRO

const carros = ["Ford", "Fiat", "VW"];
const frutas = ["Banana", "Pêra", "Uva"];

carros.forEach((item) => {
  console.log(item);
});

carros.forEach.call(frutas, (item) => {
  console.log(item);
});

//
function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativar = function (classe) {
  this.element.classList.add(classe);
};

const li = {
  element: document.querySelector("li"),
};

Dom.prototype.ativar.call(li, "xesqdele");

//
const frutas2 = ["Uva", "Maça", "Banana"];

Array.prototype.pop.call(frutas2);

const arrayLike = {
  0: "Item1",
  1: "Item2",
  2: "Item3",
  length: 3,
};
//

const li2 = document.querySelectorAll("li");

const filtro = Array.prototype.filter.call(li2, (item) => {
  return item.classList.contains("ativo");
});

console.log(filtro);

const carro2 = {
  marca: "Ford",
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};

const honda = {
  marca: "Honda",
};

const acelerarHonda = carro2.acelerar.bind(honda, 300);

console.log(acelerarHonda(10));
