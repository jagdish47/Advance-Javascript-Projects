const height = document.getElementById("height");
const weight = document.getElementById("weight");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

height.addEventListener("input", handleInput);
weight.addEventListener("input", handleInput);

btn.addEventListener("click", handleClick);

let newHeight;
let newWeight;

function handleInput() {
  newHeight = parseFloat(height.value);
  newWeight = parseFloat(weight.value);
}

function handleClick() {
  let BMI = (newWeight / (newHeight / 100) ** 2).toFixed(2);

  if (newWeight >= 200) {
    result.innerText = "Please Provide Valid Weight";
  } else if (!newHeight || !newHeight) {
    result.innerText = "Please Fill All The Fields";
  } else {
    result.innerText = `Your BMI is ${BMI}`;
  }
}
