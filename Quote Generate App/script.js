let data;

async function getQuotes() {
  const response = await fetch("https://api.quotable.io/quotes/random");
  data = await response.json();
  console.log(data);

  // Update the DOM elements after fetching the data
  let quote = document.querySelector("#quote");
  quote.innerText = data[0].content;

  let author = document.querySelector("#author");
  author.innerText = data[0].author;
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", getQuotes);
