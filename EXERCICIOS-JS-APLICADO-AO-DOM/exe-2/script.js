const buttons = document.querySelectorAll("a");
const lampada = document.querySelector(".lampada");

//ACENDER E APAGAR
function handleClick(event) {
  event.preventDefault();
  const url = event.target;
  pageFetch(url);
}

async function pageFetch(url) {
  const responsePage = await fetch(url);
  const pageText = await responsePage.text();
  replaceContent(pageText);
}

function replaceContent(text) {
  const div = document.createElement("div");
  div.innerHTML = text;
  const oldContent = document.querySelector(".content");
  const newContent = div.querySelector(".content");
  oldContent.innerHTML = newContent.innerHTML;

  const novaLampada = document.querySelector(".lampada");
  novaLampada.addEventListener("dblclick", handleDblClick);
}
//ACENDER E APAGAR

// QUEBRAR A LAMPADA//
function handleDblClick() {
  if (this.src !== "http://127.0.0.1:5500/images/quebrada.jpg") {
    this.src = "http://127.0.0.1:5500/images/quebrada.jpg";
    buttons.forEach((btn) => {
      btn.style.pointerEvents = "none";
      btn.style.backgroundColor = "grey";
    });
  }
}
// QUEBRAR A LAMPADA//

//MOUSEOUVER NA LAMPADA//
function handleOver(event) {
  if (event.target.src !== "http://127.0.0.1:5500/images/ligada.jpg") {
    this.src = "http://127.0.0.1:5500/images/ligada.jpg";
  }
}

function handleOut(event) {
  if (event.target.src == "http://127.0.0.1:5500/images/ligada.jpg") {
    this.src = "http://127.0.0.1:5500/images/desligada.jpg";
  }
}
//MOUSEOUVER NA LAMPADA//

buttons.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

lampada.addEventListener("dblclick", handleDblClick);
lampada.addEventListener("mouseover", handleOver);
lampada.addEventListener("mouseout", handleOut);
