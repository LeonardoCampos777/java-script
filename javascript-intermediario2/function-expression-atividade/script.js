// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.'); //FUNCTION EXPRESSION
console.log(priceNumber('R$ 99,99'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
const meuNome = 'Ravizinho Mu';
(()=>{
  const meuNome = 'Leozinho';
  console.log(meuNome)
})();//ativando a função
console.log(meuNome); 

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

active(function(){
  console.log('teste ativando');
})