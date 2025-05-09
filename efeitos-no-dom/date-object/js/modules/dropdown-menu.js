import outsideCLick from "./outsideClick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]"); //NODELIST

  if (dropdownMenus.length) {
    dropdownMenus.forEach((menu) => {
      ["touchstart", "click"].forEach((userEvent) => {
        //PARA USAR MAIS DE UM TIPO DE EVENTO NESSE MENU!!!!
        menu.addEventListener(userEvent, handleCLick);
      });
    });

    function handleCLick(event) {
      event.preventDefault();
      this.classList.add("active");

      outsideCLick(this, ["touchstart", "click"], () => {
        this.classList.remove("active");
      });
    }
  }
}
