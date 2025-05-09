//CONTE QUANTAS STTRINGS EXISTEM NESSA ARRAY
// E CONCATENE NO COUNT
// UTILIZANDO O FOR of LOOP

const array = ['Oi', 2, true, 'js', 0, 'vamos lá',false, 'consegui'];

let count = 0;
function countString(array){
  for(const item of array){
    if(typeof(item) === 'string'){
      count++;
    }
  }
  return count;
}

let result = countString(array);
console.log(result);


//RETORNE NO LOG APENAS AS PROPRIEDADES QUE O VALOR SEJAM UMA STRING!!!
const countries = {
  name: 'Japan',
  population: 125,
  capital: 'Tokyo',
  economyPosition: 3,
}

function showString(){
  for (const key  in countries){
    if(typeof(countries[key]) === 'string'){
      console.log(`${key}: ${countries[key]}`)
    }
  }
}

showString();