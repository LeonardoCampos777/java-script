export default function initAnimaNumeros() {
  function animaNumeros(){
    const numeros = document.querySelectorAll('[data-numero]');
    
    numeros.forEach((numero) =>{
      const total = +numero.innerText;
      const incremento = Math.floor(total /100);
    
      let start = 0;
      const timer = setInterval(() =>{
        start = start + incremento;
        numero.innerText = start;
        if(start > total){
          clearInterval(timer);
        }
      },25 * Math.random());
    })
    }
    
    // VAMOS AGORA FAZER UMA OBSERVER MUTATION!!!!
    // VAMOS DEIXAR UM OBSERVADOR OLHANDO SE TIVER ALGUMA ALTERAÇÃO EM ALGUM ATRIBUTO, VAMOS ATIVAR A FUNÇÃO!!!
    
    function handleMutation(mutation){ //parametro especial, tipo (event).
      if(mutation[0].target.classList.contains("ativo")){
        observer.disconnect();
        animaNumeros();
      }
    }
    
    const observerTarget = document.querySelector(".numeros"); // ESTAMOS MARCANDO QUEM VAMOS OBSERVAR
    const observer = new MutationObserver(handleMutation);
    
    observer.observe(observerTarget, {attributes:true});
}

