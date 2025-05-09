const frutas = ['Banana','Morango','Uva'];
const frase = 'Isso é JavaScript';


for(const fruta of frutas){
  console.log(fruta);
}

for(const caracter of frase){
  console.log(caracter);
}

const buttons = document.querySelectorAll('button');

for(const btn of buttons){
  btn.style.backgroundColor = 'blue';
}

console.log(...buttons);

const carro = {
  marca: 'Honda',
  ano: 2018,
}

for(const propiedades in carro){
  console.log(propiedades, carro[propiedades]);
}


const btnUnico = document.querySelector('button');
const btnStyles = getComputedStyle(btnUnico);
console.log(getComputedStyle(btnUnico))

for(const style in btnStyles){
  console.log(`${style}:`, btnStyles[style]);
}