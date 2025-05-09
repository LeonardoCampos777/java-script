const links = document.querySelectorAll('a');

function handleClick(event){
  event.preventDefault();
  const href = event.target.href;
  pageFetch(href);
}

async function pageFetch(url){
  const responsePage = await fetch(url);
  const pageText = await responsePage.text();
  changePage(pageText);
}

function changePage(newText){
  const newHtml = document.createElement('div');
  newHtml.innerHTML = newText;
  console.log(newHtml);

  const oldContent = document.querySelector('.content');
  const newContent = newHtml.querySelector('.content');

  oldContent.innerHTML = newContent.innerHTML;
  document.title = newHtml.querySelector('title').innerText;
}


links.forEach((link) =>{
  link.addEventListener('click',handleClick);
})