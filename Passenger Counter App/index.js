//document.getElementById("Counter").innerText = 5;
let countEl = document.getElementById("count");
let saveEl = document.getElementById("save-el");
let counter = 0;

function increment() {
  counter++;
  countEl.innerText = counter;
}

function resetCounter() {
  counter = 0;
  countEl.innerText = counter;
}

saveEl.textContent += " ";
function save() {
  const saveString = `${counter} - `;
  saveEl.textContent += saveString;
  resetCounter();

  //let saveString = counter + " - ";
  //saveEl.textContent += saveString;
  //counter = 0;
  //countEl.innerText = counter;
}
