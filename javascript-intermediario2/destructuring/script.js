const carro = {
  marca: "Gol",
  ano: "2012/2013",
};

const {
  marca: marcaCarro,
  ano: anoCarro,
  email = "Email@gmail.com",
  cpf,
} = carro;

console.log(marcaCarro);
console.log(anoCarro);
console.log(email);
console.log(cpf);

const cliente = {
  nome: "Leonardo",
  compras: {
    digitais: {
      livros: ["Livro 1", "Livro 2", "Livro 3"],
      videos: ["Vídeo 1", "Vídeo 2", "Vídeo 3"],
    },
    fisicas: {
      cadernos: ["Caderno 1"],
    },
  },
};

const {
  fisicas,
  digitais,
  digitais: { livros, videos },
} = cliente.compras;
console.log(fisicas);
console.log(digitais);
console.log(livros);
console.log(videos);

const frutas = ["Banana", "Uva", "Morango"];

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];
console.log(primeiraFruta, segundaFruta, terceiraFruta);

const [primeria, segunda, terceira] = frutas;
console.log(primeria);
console.log(segunda);
console.log(terceira);

const [teste1, teste2, teste3] = ["item1", "item2", "item3"];
console.log(teste1);
console.log(teste2);
console.log(teste3);
