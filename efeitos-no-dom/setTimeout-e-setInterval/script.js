function espera(tempo) {
  console.log(tempo);
}

setTimeout(espera,5000,"nunca nem vi");

setTimeout(() =>{
  console.log("ravi deixa eu estudar por favor mlk");
},4500);


for(let i = 0; i < 20; i++){
  setTimeout(() =>{
    console.log(i);
  },300 * i);
}

const contarAte10 = setInterval(callback,600);

let i = 0;
function callback(){
  console.log(i++)
  if(i< 20){
    clearInterval(contarAte10);
  }
}

const btn = document.querySelector("button");
btn.addEventListener("click", handleClick);

function handleClick(){
  setTimeout(() =>{
    console.log(this);
    this.classList.add("brelele");
  },2000)
}