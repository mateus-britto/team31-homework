// Giphy api

// Variables
const input = document.getElementById("gif-input");
const number = document.getElementById("number-input");
const searchButton = document.getElementById("search");
const main = document.getElementById("main-content");
const gifContainer = document.getElementById("gif-container");

// const gifs = [];
// gifs.push(gif);
function gifGenerator(query, number) {
  if (!query || !number || isNaN(number) || number <= 0) {
    console.error("Invalid input. Please provide a valid query and number.");
    return;
  }

  const url = `https://api.giphy.com/v1/gifs/search?api_key=mRNq3iNi5vqXK3Xu6HXBeTgFYXHRe7ei&q=${query}&limit=${number}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Clear previous results
      gifContainer.innerHTML = "";

      data.data.forEach((item) => {
        const gif = document.createElement("img");
        gif.setAttribute("class", "gif");
        gif.setAttribute("src", item.images.original.url);
        gifContainer.append(gif);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
}

// Declare userInput variable
let searchInput = "";
let numberInput = "";

// Get user input
input.addEventListener("change", (event) => {
  searchInput = event.target.value;
});

number.addEventListener("change", (event) => {
  numberInput = event.target.value;
});

// Search based on a user input
searchButton.addEventListener("click", () => {
  gifGenerator(searchInput, numberInput);

  // Clear the input fields after the search
  input.value = ""; // Clear the text input field
  number.value = ""; // Clear the number input field

  // Reset the variables
  searchInput = "";
  numberInput = "";

  gifContainer.style.display = "flex"
});
