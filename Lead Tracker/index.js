const inputBtn = document.querySelector("#input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
let myLeads = [];

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

const loadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (loadsFromLocalStorage) {
  myLeads = loadsFromLocalStorage;
  render(myLeads);
}

function logout() {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
  console.log(localStorage.getItem("myLeads"));
}

inputBtn.addEventListener("click", logout);
const listItems = document.querySelector("html");

function render(Leads) {
  let listItems = "";
  for (let i = 0; i < Leads.length; i++) {
    //  ulEl.innerHTML += `<li>${myLeads[i]}</li>`;
    listItems += `
    <li>
      <a href="${Leads[i]}" target="_blank">
        ${Leads[i]}
      </a>
    </li>`;
  }

  ulEl.innerHTML = listItems;
}
