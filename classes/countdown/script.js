import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown("10 February 2025 23:59:59 GMT-0300");
console.log(tempoParaONatal.total);

function rodarTempo(){
  const transformJson = JSON.stringify(tempoParaONatal.total);
  const div = document.querySelector('.div');
  div.innerHTML = transformJson.split(',').join('-------');
  div.innerHTML = transformJson.split('{').join('(');
  return div
}


setInterval(rodarTempo, 1000)