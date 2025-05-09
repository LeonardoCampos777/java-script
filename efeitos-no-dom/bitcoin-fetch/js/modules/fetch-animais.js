import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {}

async function animalFetch(url) {
  const animalResponse = await fetch(url);
  const animalJSON = await animalResponse.json();
  const numerosGrid = document.querySelector(".numeros-grid");
  animalJSON.forEach((animal) => {
    const newAnimais = createAnimal(animal);
    numerosGrid.appendChild(newAnimais);
  });
  initAnimaNumeros();
}

function createAnimal(animal) {
  const div = document.createElement("div");
  div.classList.add("numero-animal");
  div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
  return div;
}

animalFetch("./animaisapi.json");
