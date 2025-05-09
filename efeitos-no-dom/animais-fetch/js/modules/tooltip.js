export default function initToolTip() {
  const tooltips = document.querySelectorAll("[data-tooltip]"); //1

  if (tooltips.length) {
    function onMouseOver() { //4
      const tooltipBox = criartooltipBox(this);
      onMouseMove.tooltipBox = tooltipBox;
      this.addEventListener("mousemove", onMouseMove);

      onMouseLeave.tooltipBox = tooltipBox;
      onMouseLeave.element = this;
      this.addEventListener("mouseleave", onMouseLeave);
    }

    const onMouseLeave = {  //6
      //PODEMOS TAMBÉM USAR OBJETOS COMO CALLBACK
      handleEvent() {
        //PRECISAMOS USAR ESSE MÉTODO PARA FUNCIONAR
        this.tooltipBox.remove();
        this.element.removeEventListener("mouseleave", onMouseLeave);
        this.element.removeEventListener("mousemove", onMouseMove);
      },
    };

    const onMouseMove = { //5
      handleEvent(event) {
        this.tooltipBox.style.top = event.pageY + 20 + "px";
        this.tooltipBox.style.left = event.pageX + 20 + "px";
      },
    };

    //CRIANDO A tooltipBox NO HTML!!!!
    function criartooltipBox(element) { //3
      const tooltipBox = document.createElement("div");
      const text = element.getAttribute("aria-label");
      tooltipBox.classList.add("tooltip");
      tooltipBox.innerText = text;
      document.body.appendChild(tooltipBox); //DEIXAR ESSA BOX LÁ NO FIM DO HTML
      return tooltipBox;
    }
    //CRIANDO A tooltipBox NO HTML!!!!

    tooltips.forEach((item) => { //2
      item.addEventListener("mouseover", onMouseOver);
    });

    // tooltipBox.style.top = event.pageY + 'px'; //PARA POSICIONAR O BOX DE ACORDO COM O MEU MOUSE EM CIMA!!!!!(TEM QUE TRANSFOMAR EM PX)
    // O PAGE MOSTRA ONDE O MOUSE ESTÁ EM RELACÃO A PÁGINA WEB
    //tooltipBox.style.left = event.pageX + 'px'; //PARA POSICIONAR O BOX DE ACORDO COM O MEU MOUSE EM CIMA!!!!!(TEM QUE TRANSFOMAR EM PX)
    // O PAGE MOSTRA ONDE O MOUSE ESTÁ EM RELACÃO A PÁGINA WEB
  }
}