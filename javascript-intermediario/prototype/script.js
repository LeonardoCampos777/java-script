function Pessoa(nome,idade){
  this.nome = nome;
  this.idade = idade;
  this.abracar = function(){
    return 'Abraçou';
  }
  this.andar = function(){
    return 'Andou pelo objeto';
  }
}
// primeiro ele vai verificar dentro do objeto, se não tiver ele vai verificar dentro do prototypo

Pessoa.prototype.andar = function(){
  return this.nome + ' Pessoa andou';
}

Pessoa.prototype.nadar = function(){
  return this.nome + ' Pessoa nadou';
}

const leo = new Pessoa('Léo', 24);

console.log(leo.nome);
console.log(leo.idade);
console.log(leo.andar());
console.log(leo.nadar());

//console.log(Pessoa.prototype);
//console.log(leo.prototype);


// o PROTOTYPE está aligado apenas a FUNÇÃO.
// objetos não tem prototype.

const pais = 'Brasil';
const cidade = new String('Rio');

const listaAnimais = ['Cachorro, Gato, Cavalo'];

const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const Carro = {
  marca: 'Ford',
  ano: 2000,
  andar() {
    return true;
  }
}