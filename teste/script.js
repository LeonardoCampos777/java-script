const btn = document.querySelector('[data-button="btn"]');
const img = document.querySelector('.img');
const iframe = document.querySelector('.iframe');

function clickCasamento(){
  setTimeout(() =>{
    img.classList.add('active');
    iframe.classList.add('active');
    document.body.classList.add('cor');
  },2000)
  btn.classList.add('removebtn');
}

btn.addEventListener('click',clickCasamento);