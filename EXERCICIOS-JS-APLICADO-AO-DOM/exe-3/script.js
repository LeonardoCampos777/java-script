const linksCores = document.querySelectorAll(".link-cores");
const linkAutomatico = document.querySelector('.link-automatico');

function handleClick(event) {
  event.preventDefault();
  const url = event.target.href;
  pageFetch(url);
}

async function pageFetch(url) {
  const responseFetch = await fetch(url);
  const pageText = await responseFetch.text();
  replaceContent(pageText);
}

function replaceContent(text) {
  const div = document.createElement('div');
  div.innerHTML = text;
  const oldContent = document.querySelector('.content');
  const newContent = div.querySelector('.content');
  oldContent.innerHTML = newContent.innerHTML;
}

// Iniciar loop automático infinito
let automaticLoopInterval = null;
let currentIndex = 0;

function startAutomaticLoop(event) {
  event.preventDefault();
  // Evita múltiplos loops
  if (automaticLoopInterval !== null) return;

  automaticLoopInterval = setInterval(() => {
    const link = linksCores[currentIndex];
    if (link) {
      const url = link.href;
      pageFetch(url);
    }

    currentIndex = (currentIndex + 1) % 3; // Volta pro índice 0 após o 2   (% significa "MODULO")
  }, 1000);
}

// Evento do botão automático
linkAutomatico.addEventListener('click', startAutomaticLoop);

// Clique manual
linksCores.forEach((link) => {
  link.addEventListener("click", handleClick);
});
