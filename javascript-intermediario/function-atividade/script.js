// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll("p"); //NODLIST

const totalCaracteres = Array.prototype.reduce.call(
  //TRANSFORMAMOS POR UM MOMENTO A NODLIST EM UMA ARRAY PURA!!
  paragrafos,
  (acumulador, item) => {
    return acumulador + item.innerText.length;
  },
  0
);
console.log(totalCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function novoElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  elemento.classList.add(classe);
  elemento.innerHTML = conteudo;
  return elemento;
}

console.log(novoElemento("h2", "azul", "esse aqui é o xesqdele"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const novoH1 = novoElemento.bind(null,"h1", "ativo");

console.log(novoH1("breelelele"));
