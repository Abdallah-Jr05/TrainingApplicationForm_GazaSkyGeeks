let sign = document.getElementById("calculator-sign");
sign.textContent = "\u00a0";

let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let result;

function printResult() {
  document.getElementById("result").textContent = "Result =  " + result;
  result = 0;
}

function Add() {
  sign.textContent = "+";
  result = num1 + num2;
  printResult();
}
function sub() {
  sign.textContent = "-";
  result = num1 - num2;
  printResult();
}
function div() {
  sign.textContent = "/";
  result = num1 / num2;
  printResult();
}
function Mult() {
  sign.textContent = "*";
  result = num1 * num2;
  printResult();
}
