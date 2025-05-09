//RETORNE NO LOG APENAS AS PROPRIEDADES QUE O VALOR SEJAM UMA STRING!!!
const countries = {
  name: "Japan",
  population: 125,
  capital: "Tokyo",
  economyPosition: 3,
};

function showString(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

showString(countries);
