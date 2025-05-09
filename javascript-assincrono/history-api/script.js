const links = document.querySelectorAll("a");

function handleCLick(event) {
  event.preventDefault();
  const url = event.target;
  pageFetch(url);
  window.history.pushState(null, null, url);
}

async function pageFetch(url) {
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  replaceContent(pageText);
}

function replaceContent(text) {
  const div = document.createElement("div");
  div.innerHTML = text;
  const oldContent = document.querySelector(".content");
  const newContent = div.querySelector(".content");
  oldContent.innerHTML = newContent.innerHTML; 
}

window.addEventListener("popstate", () => {
  pageFetch(window.location.pathname);
});

links.forEach((link) => {
  link.addEventListener("click", handleCLick);
});
