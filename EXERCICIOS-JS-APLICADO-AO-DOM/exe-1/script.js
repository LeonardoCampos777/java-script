const btnAtivar = document.querySelector('[data-btn="ativar"]');
const inputNome = document.querySelector('[data-nome]');
const inputlAltura = document.querySelector('[data-altura]');
const inputlPeso = document.querySelector('[data-peso]');


function handleClick(event){
  event.preventDefault();

  function calcularIMC(){
    let multAltura = inputlAltura.value * inputlAltura.value;
    const buscarImc = inputlPeso.value / multAltura;
    return buscarImc.toFixed(1);
  }

  const imc = calcularIMC();

  function mostrarDiv(){
    const resultado = document.querySelector('.div-resultado');

    if (imc < 25) {
      resultado.innerText = `${inputNome.value}, o seu nível de IMC é de ${imc}. Parabéns, seu peso está normal. Continue assim sendo essa pessoa saudável!`;
    } else if (imc >= 25 && imc < 30) {
      resultado.innerText = `${inputNome.value}, o seu nível de IMC é de ${imc}. Cuidado! Você está na Pré-Obesidade.`;
    } else if (imc >= 30 && imc < 35) {
      resultado.innerText = `${inputNome.value}, o seu nível de IMC é de ${imc}. Cuidado! Você está na Obesidade Grau I. Procure um médico e comece a praticar exercícios físicos.`;
    } else if (imc >= 35 && imc < 40) {
      resultado.innerText = `${inputNome.value}, o seu nível de IMC é de ${imc}. Obesidade Grau II (mórbida). Por favor, procure ajuda médica urgente. Sua saúde é prioridade!`;
    } else {
    resultado.innerText = `${inputNome.value}, o seu nível de IMC é de ${imc}. Vai te lascar! Cuida em ir pra academia, tá parecendo a Vovózona!`;
  }
  }

  mostrarDiv();
}

btnAtivar.addEventListener('click',handleClick);