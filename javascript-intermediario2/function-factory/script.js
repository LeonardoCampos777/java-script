function createButton(text) {
  const numeroSecreto = "1999";
  function element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = text;
    return buttonElement;
  }
  return Object.freeze({
    text,
    element,
  });
}

const btnComprar = createButton("Comprar");
const btnVender = createButton("Vender");

btnComprar.text = "xesqxesq";
console.log(btnComprar);
console.log(btnVender);

function Pessoa(nome) {
  //constructor function
  if (!new.target) 
    return new Pessoa(nome)
    this.nome = nome;
  }

Pessoa.prototype.empinar = function () {
  return `${this.nome} empinou`;
};

const motoqueiro = Pessoa("Léo");
console.log(motoqueiro.empinar());