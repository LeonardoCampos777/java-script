const url = 'https://cors-anywhere.herokuapp.com/https://www.google.com/';

fetch(url)
.then(response => response.text())
.then(json => console.log(json))