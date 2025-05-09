fetch("/dados.json")
  .then((response) => response.json())
  .then((corpo) => {
    corpo.forEach((materia) => {
      console.log(materia);
    });
  });

const configuracoes = {
  player: "Google API",
  tempo: 2.5,
  aula: "2-1 JavaScript",
  vitalicio: true,
};

const stringConfig = JSON.stringify(configuracoes);
console.log(stringConfig);

const mostrarConfig = JSON.parse(stringConfig);
console.log(mostrarConfig);
localStorage.configuracoes = stringConfig;
