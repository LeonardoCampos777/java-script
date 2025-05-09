export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  if (linksInternos) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    linksInternos.forEach((item) => {
      item.addEventListener("click", scrollToSection);
    });
  }
}

//VAMOS FAZER AGORA UM SCROLL SUAVE USANDO O JAVASCRIPT.
// USANDO O HREF COMO REFERÊNCIA PARA FAZER A RELAÇÃO ENRTRE O MENU E AS SECTIONS  