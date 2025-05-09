const arr = [[1,2], [3,4], [5,6]];


arr.forEach((elemento)=>{
    elemento.forEach((item)=>{
        let multipliqueItens = item *=  item;
        console.log(multipliqueItens)
    })
})
function multipleAll(arr){
  let result = 1;

  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
      result *= arr[i][j];
    }
  }
  return result;
}

console.log(multipleAll(arr))