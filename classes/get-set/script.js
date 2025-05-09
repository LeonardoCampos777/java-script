const button = {
  get element() {
    return this._element;
  },
  set element(tipo) {
    this._element = document.createElement(tipo);
  }
}
button.element = 'button'; //set
console.log(button.element); //get 

const frutas = {
  lista: [],
  set nova(fruta){
    this.lista.push(fruta);
  }
}

frutas.nova = 'Banana';
frutas.nova = 'Melancia';
frutas.nova = 'Abacaxi';
console.log(frutas);

class Button{
  constructor(text,color){
    this.text = text;
    this.color = color;
  }

  get element(){
    const elementType = this._elementType || 'button';
    const buttonElement = document.createElement(elementType);
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }

  set element(type){
    this._element = type;
  }
}

const blueButton = new Button('comprar','blue');
blueButton.element = 'div';
console.log(blueButton);

