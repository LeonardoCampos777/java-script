export default function initModal() {
  const modalAbrir = document.querySelector('[data-modal="abrir"]');
  const modalFechar = document.querySelector('[data-modal="fechar"]');
  const modalContainer = document.querySelector('[data-modal="container"]');

  if (modalAbrir && modalFechar && modalContainer) {
    function openCloseModal(event) {
      event.preventDefault();
      modalContainer.classList.toggle("ativo");
    }

    function toCloseContainer(event) {
      event.preventDefault();
      if (event.target === modalContainer) {
        modalContainer.classList.remove("ativo");
      }
    }

    modalAbrir.addEventListener("click", openCloseModal);
    modalFechar.addEventListener("click", openCloseModal);
    modalContainer.addEventListener("click", toCloseContainer);
  }
}
