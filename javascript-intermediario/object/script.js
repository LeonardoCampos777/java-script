const pessoa = new Object({
  nome: "Léo",
});

const carro = {
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return this;
  },
  acelerar() {
    return this.marca + " acelerou";
  },
  buzinar() {
    return this.marca + " buzinou";
  },
};

const honda = Object.create(carro).init("Honda");
console.log(honda);
console.log(honda.acelerar());
console.log(honda.buzinar());

const ferrari = Object.create(carro).init("Ferrari");
console.log(ferrari);
console.log(ferrari.acelerar());
console.log(ferrari.buzinar());

// OBJECT.ASSIGN()
const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "buzinou";
  },
};

const moto = {
  rodas: 2,
  capacete: true,
};

const carro2 = {
  rodas: 4,
  mala: true,
};

Object.assign(moto, funcaoAutomovel);
Object.assign(carro2, funcaoAutomovel);

// OBJECT.DEFINEPROPERTIES()

const moto2 = {
  capacete: true,
};

Object.defineProperties(moto2, {
  rodas: {
    enumerable: true,
    //configurable: false, //NÃO CONSEGUE DELETAR ESSA PROPIEDADE (RODAS).
    //writable: true, // MAS AQUI CONSEGUE ESCREVER EM CIMA E MUDAR O VALOR.
    get() {
      // TRADUÇÃO (pegar)
      // QUANDO DEFINIRMOS OU ATRIBUIMOS UM VALOR AQUI
      return this._rodas; // aqui é uma propiedade nova dentro do get
    },
    set(valor) {
      // TRADUÇÃO (definir)
      // O SET VAI MODIFICAR O VALOR QUE SETAMOS!!!
      this._rodas = valor * 2 + " Total Rodas";
    },
  },
});

console.log(moto2);
console.log((moto2.rodas = 50)); //PRIMEIRO ESTAMOS SETANDO O VALOR DAS RODAS (SET)
console.log(moto2.rodas); // AQUI O GET ENTRA EM AÇÃO, PORQUE ELE VAI VER EM BAIXO QUE O VALOR FOI SETADO (=), ENTÃO ELE VAI FAZER OQUE ESCREVEMOS LÁ DENTRO DO CÓDIGO

// OBJECT.GETPROTOTYPEOF()
const frutas2 = ["Banana"];

console.log(Object.getPrototypeOf(""));
console.log(Object.getPrototypeOf(frutas2));
console.log(Array.prototype);
console.log(Object.prototype);
// GETPROTOTYPEOF

// OBJECT.IS()
const frutas5 = ["Banana", "Uva"];
const frutas6 = ["Banana", "Uva"];

const novaFruta = frutas5;

Object.is(frutas5, frutas6); //FALSE
Object.is(frutas5, novaFruta); // TRUE
// OBJECT.IS()

//OBJECT.FREEZE()
//OBJECT.SEAL()
//OBJECT.PREVENTEXTENSIONS()

const carro3 = {
  marca: "Ford",
  ano: 2018,
};

Object.seal(carro3);
delete carro3.ano;
carro3.cavalos = "33 cavalos";
carro3.marca = "Honda";

console.log(carro3);

// PARA VERIFICAR O TIPO DE OBJETO

const frutas = ["Banana", "Uva"];
const frase = "Oi eu sou o Goku";
const somar = function (a, b) {
  return a + b;
};

const carro5 = {
  marca: "Golzinho do amor",
};

console.log(Object.prototype.toString.call(frutas));
