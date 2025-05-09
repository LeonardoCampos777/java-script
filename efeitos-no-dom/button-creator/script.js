const form = document.getElementById("controles");
const btn = document.querySelector(".button");
const cssText = document.querySelector(".css");
form.addEventListener("change", handleChange);

const handleStyle = {
  element: btn,
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "rem";
  },
};

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  saveValue(name,value);
  showCss();
}

function saveValue(name,value){
  localStorage[name] = value;
}

function setValue(){
  const properties = Object.keys(localStorage);
  properties.forEach((propertie) =>{
    form.elements[propertie].value = localStorage[propertie];
    handleStyle[propertie](localStorage[propertie]);
  });
}
setValue();


function showCss() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}


