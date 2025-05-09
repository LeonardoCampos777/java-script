//Exercício 02 (mostre no log as imagem de fotos na horizontal)

function imgHorizontal() {
  const imagens = document.querySelectorAll("img");
  imagens.forEach((img) => {
    const valorLargura = Math.floor(img.getBoundingClientRect().width);
    const valorAltura = Math.floor(img.getBoundingClientRect().height);

    if(valorLargura > valorAltura){
      console.log(img)
    }
  });
  
}

imgHorizontal();
