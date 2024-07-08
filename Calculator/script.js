let numbers = document.getElementsByClassName("num");
let output = document.getElementById("output");
let operation = document.getElementsByClassName("opr");

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", workWithDigits);
}

let result = "";

function workWithDigits(event) {
  let digit = event.target.innerText;
  result += digit;
  output.innerHTML = result;
}

for (let i = 0; i < operation.length; i++) {
  operation[i].addEventListener("click", performOperation);
}

function performOperation(event) {
  if (event.target.innerText === "+") {
    result += Number(result);
  }
}
