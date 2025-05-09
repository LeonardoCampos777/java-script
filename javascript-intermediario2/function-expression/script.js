teste1('xesqq');
function teste1(frase){
  console.log(frase);
}//FUNCTION DECLARATION



const teste2 = (frase) => frase;
console.log(('brelee')); //FUNCTION EXPRESSION

function somar(a,b){
  return a+b;
}
console.log(somar(5,5))

const dividir = (a,b) => a / b;
console.log(dividir(100,2));


const intrumento = 'bateria';

(() =>{
  const intrumento = 'violao';
  console.log(intrumento);
})();

console.log(intrumento);