const btnNewTask = document.querySelector("#btn-new-task");
const input = document.querySelector("#input-new-task");
const localStorageKey = "to-do-list-lc";

function newTask() {
  if (!input.value) {
    alert("Digite algo para inserir na sua lista!");
  }
  else if(validateIfExistsNewTask()){
    alert("Já existe uma task com essa descrição");
    input.style.border = '3px solid red';
  } 
  else {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    values.push({
      name: input.value,
    });

    localStorage.setItem(localStorageKey, JSON.stringify(values));
    showValues();
  }
}

function showValues() {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  const list = document.querySelector("#to-do-list");
  list.innerHTML = "";
  for (let i = 0; i < values.length; i++) {
    list.innerHTML += `<li>${values[i]["name"]}<button id="btn-ok" onclick='removeItem("${values[i]["name"]}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
</svg></button></li>`;
  }

  input.value = '';
}
showValues();

function removeItem(data) {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let index = values.findIndex((x) => x.name == data);
  values.splice(index, 1);
  localStorage.setItem(localStorageKey, JSON.stringify(values));
  showValues();
}

function validateIfExistsNewTask(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let inputValue = input.value;
    let exists = values.find((x) => x.name == inputValue);
    return !exists ? false : true;
}

btnNewTask.addEventListener("click", newTask);
