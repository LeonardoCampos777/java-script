// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
const brasilCampeao = [1959, 1962, 1970, 1994, 2002];
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(let i = 0; i < brasilCampeao.length; i++){
  console.log(`O Brasil ganhou a copa de ${brasilCampeao[i]}`);
}
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (let fruta = 0; fruta < frutas.length; fruta++){
  console.log(frutas[fruta]);
  if(frutas[fruta] === 'Pera'){
    break;
  }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
const ultimaFruta = frutas[frutas.length - 1];

// a gente vai pegar o total de frutas com o length, porém ele vai dar que tem 5 itens dentro dessa arry, ai a gente diminui 1 porque a array começa por o 0.