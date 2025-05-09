class Button {
  constructor(text, color, background) {
    this.text = text;
    this.color = color;
    this.background = background;
  }

  element() {
    const btnElement = document.createElement("button");
    btnElement.innerText = this.text;
    btnElement.style.color = this.color;
    btnElement.style.backgroundColor = this.background;
    btnElement.style.padding = "20px 80px";
    btnElement.style.textTransform = "uppercase";
    btnElement.style.fontWeight = "800";
    btnElement.style.margin = "40px";
    return btnElement;
  }

  appendChildBtn(target) {
    const elementTarget = document.querySelector(target);
    elementTarget.appendChild(this.element());
    return elementTarget;
  }
}

const button1 = new Button("COMPRAR", "green", "lightblue");
const button2 = new Button("ALUGAR", "red", "grey");
const button3 = new Button("VENDER", "purple", "pink");
console.log(button1);
console.log(button2);
console.log(button1.element());
button1.appendChildBtn("body");
button2.appendChildBtn("body");
button3.appendChildBtn("body");