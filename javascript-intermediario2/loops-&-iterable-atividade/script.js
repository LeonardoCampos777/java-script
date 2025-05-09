// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const lista = document.querySelectorAll('li');

for(const classLi of lista){
  classLi.classList.add('ativo')
}

console.log(...lista);

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for(const windowKey in window){
  console.log(windowKey + ':' + window[windowKey]);
}
