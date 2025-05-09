// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoas(nomeAtribuido,sobreAtribuido,idadeAtribuida){
  this.nome = nomeAtribuido;
  this.sobrenome = sobreAtribuido;
  this.idade = idadeAtribuida;
}

Pessoas.prototype.nomeCompleto = function(){
  return this.nome + this.sobrenome;
}

const leo = new Pessoas('Leonardo', ' Campos', 24);
const ravi = new Pessoas('Ravi Mayk ', 'Muniz', 5);

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
console.log(NodeList.prototype);
console.log(HTMLAllCollection.prototype);
console.log(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
