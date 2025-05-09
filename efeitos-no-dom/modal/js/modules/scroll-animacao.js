export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6; // aqui é a conta de 60% da tela

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade; //tamanho do height da tela para acontecer o efeito
        if (sectionTop < 0) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo"); // para quando você voltar de cima pra baixo, acontecer o mesmo efeito.
        }
      });
    }
    animaScroll(); // estamos ativando a função para o primeiro elemento já ficar visivel
    // ao abrir a tela

    window.addEventListener("scroll", animaScroll);
  }
}
