// SE O INPUT FOR DIVISIVEL POR 3 = FIZZ
//SE O INPUT FOR DIVISIVEL POR 5 = BUZZ
// SE O INPUT FOR DIVISIVEL POR 3 E POR 5  = FIZZBUZZ
// SE O INPUT NÃO FOR DIVISIVEL POR 3 E 5  = INPUT
// SE O INPUT NÃO FOR UM NUMBER = NOT A NUMBER

function fizzBuzz(input){
  if(typeof input !== 'number'){
    return 'Not a number'
  }
  if(input % 3 === 0 && input % 5 === 0){
    return 'FizzBuzz';
  }
  if(input %  3 === 0){ //SE RETORNAR UM NÚMERO QUEBRADO DA FALSE!!!
    return 'Fizz'
  }
  if(input % 5 === 0){ //SE RETORNAR UM NÚMERO QUEBRADO DA FALSE!!!
    return 'Buzz';
  }
  if(input % 3 !== 0 && input % 5 !== 0){
    return input;
  }
}

let result = fizzBuzz(15);
console.log(result);