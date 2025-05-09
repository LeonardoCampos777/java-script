function sorteio(premio,...ganhadores){
  console.log(arguments);
  console.log(ganhadores);
  ganhadores.forEach((ganhador)=>{
    console.log(ganhador + 'ganhou um ' + premio);
  })
}

sorteio('Creta ','Joãozin ','Leozin ','Bastiãozin ','Ravizin');


const frutas = ['Banana','Maça','Melancia'];
const legumes = ['Cenoura','Beterraba'];

const comidas = [...legumes, 'Pizza', ...frutas];
console.log(comidas);

const comidas2 = [frutas, legumes];
console.log(comidas2);


const numeroMaximo = Math.max(1,4,3,5,7,153,675,777);
console.log(numeroMaximo);

const listaNumeros = [1,4,31222222,1235,2347,153,675,777];
console.log(listaNumeros);
console.log(Math.max(...listaNumeros));
console.log(Math.min(...listaNumeros));


const btns = document.querySelectorAll('button');
const div = document.querySelectorAll('div');

const btnsArray = [...btns];
console.log(btnsArray);


const frase = 'Isso ai venci papai';

const novasFrases = [...frase];
console.log(novasFrases);