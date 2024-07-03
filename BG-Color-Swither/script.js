let btn = document.getElementById("btn");
btn.addEventListener("click", changeBackground);

let body = document.querySelector("#body");

function changeBackground() {
  let newColor = generateNewColor();

  body.style.backgroundColor = newColor;

  console.log("Inside the function", body);
}

function generateNewColor() {
  let characters = "abcdef0123456789";
  let newColor = "#";

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16);
    newColor += characters[randomIndex];
  }

  return newColor;
}
