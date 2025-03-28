// JavaScript 2 Project - Movie App

// Using the created API
const movies = []; // Variable to store the data from the API

fetch(
  "https://raw.githubusercontent.com/mateus-britto/mateus-britto.github.io/refs/heads/main/data.json"
)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((movie) => {
      movies.push(movie);
    });
    displayMovies(movies); // Call displayMovies after movies are populated
  })
  .catch((error) => {
    console.error("Error fetching movies:", error);
  });

// Variables
const body = document.body;
const contentWrapper = document.getElementById("content-wrapper");
const main = document.getElementById("main-content");
const clearCommentsButton = document.getElementById("clear-comments-button");
const commentSection = document.getElementById("comment-section");
const searchMessageContainer = document.getElementById("search-message-container");

// Time spent on the page
let timeSpent = 0; // Initialize time spent in milliseconds
const timeSpentElement = document.getElementById("time-spent");

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    timeSpent += 10; // Increase by 10ms
    const minutes = Math.floor(timeSpent / (60 * 1000));
    const seconds = Math.floor((timeSpent % (60 * 1000)) / 1000);
    timeSpentElement.innerText = `Time on the page: ${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  }, 10); // Update every 10ms
});

// Function create the card component and display the movies
function displayMovies(moviesToDisplay) {
  main.innerHTML = ""; // Clear the main content
  moviesToDisplay.forEach((item) => {
    const card = document.createElement("div");
    card.setAttribute("class", "fade-in card-component item");

    const moviePoster = document.createElement("img");
    moviePoster.setAttribute("id", "card-component-poster");
    moviePoster.setAttribute("class", "card-component-poster");
    moviePoster.setAttribute("src", item.poster_url);

    // This div will wrap the text components
    const movieWrapper = document.createElement("div");
    movieWrapper.setAttribute("id", "card-component-movie-wrapper");
    movieWrapper.setAttribute("class", "card-component-movie-wrapper");

    const movieTitle = document.createElement("h2");
    movieTitle.setAttribute("id", "card-component-movie-title");
    movieTitle.setAttribute("class", "card-component-movie-title");
    movieTitle.innerHTML = `${item.title} <span class="movie-year">(${item.movie_year})</span>`;

    const movieSummary = document.createElement("p");
    movieSummary.setAttribute("id", "card-component-movie-summary");
    movieSummary.setAttribute("class", "card-component-movie-summary");
    movieSummary.innerText = "Summary";

    const movieDescription = document.createElement("p");
    movieDescription.setAttribute("id", "card-component-movie-description");
    movieDescription.setAttribute("class", "card-component-movie-description");
    movieDescription.innerText = item.description;

    // Limiting the number of actors shown
    const maxVisible = 3;
    const visibleActors = item.actors.slice(0, maxVisible).join(", ");
    const hiddenActors = item.actors.slice(maxVisible).join(", ");

    const movieCast = document.createElement("p");
    movieCast.setAttribute("id", "card-component-movie-cast");
    movieCast.setAttribute("class", "card-component-movie-cast");
    movieCast.innerHTML = `
      <strong>Cast:</strong> ${visibleActors}
      <span class="hidden-actors">, ${hiddenActors}</span> <span class="see-more-actors">see more...</span> 
    `;

    const movieRating = document.createElement("p");
    movieRating.setAttribute("id", "card-component-movie-star");
    movieRating.setAttribute("class", "card-component-movie-star");
    movieRating.innerText = "Click here to rate this movie";
    movieRating.addEventListener("click", () => {
      movieRater(movieRating);
    });

    // Comment input field
    const movieComment = document.createElement("input");
    movieComment.setAttribute("id", `card-component-movie-comment_${item.id}`);
    movieComment.setAttribute("enterkeyhint", "enter");
    // The enterkeyhint is used to define the action of the "Enter" key in mobile devices.
    movieComment.setAttribute("class", "card-component-movie-comment");
    movieComment.setAttribute("type", "text");
    movieComment.placeholder = "Say something about this movie";

    // Comment wrapper
    const commentWrapper = document.createElement("div");
    commentWrapper.setAttribute("id", "comment-wrapper");
    commentWrapper.setAttribute("class", "comment-wrapper");

    // Event listener to add comments
    movieComment.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        // If the user presses the enter key
        const inputValue = this.value;
        if (inputValue.trim()) {
          const comment = document.createElement("p");
          comment.setAttribute("class", "comment-text");
          comment.innerHTML = `<span class="comment-title">User review (${item.title}):</span> <br><br> ${inputValue}`;
          commentWrapper.style.display = "block"; // Displays the hidden div with the comment
          commentWrapper.append(comment);
          commentSection.append(commentWrapper);
          this.value = ""; // Clear input field after submitting
          clearCommentsButton.style.display = "block"; // Displays the button if there are messages
        } else {
          // Handle the case where the input is empty or whitespace
          alert("Please enter a valid comment.");
        }
      }
    });

    // Event listener to clear the comments button
    clearCommentsButton.addEventListener("click", () => {
      document.querySelectorAll(".comment-wrapper").forEach((element) => element.remove());
      commentWrapper.innerHTML = ""; // Clear the previous comments
      clearCommentsButton.style.display = "none"; // Hides the button if there are no comments
    });

    card.append(moviePoster);
    movieWrapper.append(
      movieTitle,
      movieSummary,
      movieDescription,
      movieCast,
      movieRating,
      movieComment
    );
    card.append(movieWrapper);
    main.append(card);
  });
}

// Event listener to toggle between light and dark modes
const modeButton = document.getElementById("toggle-mode");
let toggle = true;

modeButton.addEventListener("click", () => {
  if (toggle) {
    document.documentElement.classList.add("light-mode"); // Apply to <html>
    modeButton.innerText = "🌙"; // Update button text
    toggle = false;
  } else {
    document.documentElement.classList.remove("light-mode"); // Remove from <html>
    modeButton.innerText = "☀️"; // Update button text
    toggle = true;
  }
});

// Function to rate the movies
function movieRater(movieRating) {
  const rating = parseInt(
    prompt("Type a number (1 to 5) to rate this movie from 1 to 5 stars"),
    10
  );

  if (rating >= 1 && rating <= 5) {
    movieRating.innerHTML = `Rated: <san class="rating-star">${"★".repeat(rating)}${"☆".repeat(
      5 - rating
    )}</span>`;
    // Repeat and combine the filled and empty stars to create the rating (created with AI support).
  } else {
    alert("Please enter a valid rating between 1 and 5.");
  }
}

// Variable to store the current timer ID
let currentTimerId = null;

// Event listener to search for a keyword in movie titles
const searchInput = document.getElementById("header-movie-search");
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    // If the user press the enter key
    const inputValue = this.value.toLowerCase();
    const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(inputValue));
    main.innerHTML = ""; // Clears the main content

    // I used AI to help me display the elapsed time in MM:SS:MS
    let userInput;
    do {
      userInput = prompt("Would you like to set a time limit for choosing your movie? (yes/no)");
      if (userInput === null) return; // Handle cancel button in prompt
    } while (userInput.toLowerCase() !== "yes" && userInput.toLowerCase() !== "no");
    // Will keep asking for the input until it gets the acceptable answer

    if (userInput.toLowerCase() === "yes") {
      let timerInput;
      do {
        timerInput = parseInt(prompt("Set a timer (in minutes)"), 10) * 60 * 1000; // Convert minutes to milliseconds
        if (userInput === null) return; // Handle cancel button in prompt
      } while (isNaN(timerInput)); // Ensures the user types a number

      let timer = document.getElementById("timer");

      // Clear the previous timer if it exists
      if (currentTimerId !== null) {
        clearInterval(currentTimerId);
      }

      // Start a new timer
      currentTimerId = setInterval(() => {
        if (timerInput > 0) {
          timerInput -= 10; // Decrease by 10ms
          const minutes = Math.floor(timerInput / (60 * 1000));
          const seconds = Math.floor((timerInput % (60 * 1000)) / 1000);
          const milliseconds = Math.floor((timerInput % 1000) / 10);
          timer.innerText = `Make your choice \n${String(minutes).padStart(2, "0")}:${String(
            seconds
          ).padStart(2, "0")}:${String(milliseconds).padStart(2, "0")}`;
        } else {
          clearInterval(currentTimerId); // Stop the timer
          currentTimerId = null; // Reset the timer ID
          timer.innerText = `Time's up! Search again.`;
          const alarmSound = document.getElementById("alarmSound");
          alarmSound.play();
          displayMovies(movies); // Refresh the screen when the time is up
        }
      }, 10); // Update every 10ms
    } else if (userInput.toLowerCase() === "no") {
      handleSearchResults(filteredMovies, inputValue);
    }
    handleSearchResults(filteredMovies, inputValue);
  }
});

// Function to handle search results
function handleSearchResults(filteredMovies, inputValue) {
  timer.innerText = ""; // Clear the timer text

  // Remove the previous message if it exists
  const previousMessage = document.querySelector(".search-message");
  if (previousMessage) {
    previousMessage.remove();
  }

  // Check if there are any movies or if the user typed something
  if (filteredMovies.length === 0 || inputValue === "") {
    const searchMessage = document.createElement("p");
    searchMessage.setAttribute("class", "search-message");
    searchMessage.innerText = "No results found. Try refining your search terms.";
    searchMessageContainer.append(searchMessage);
    searchInput.value = ""; // Clear the input field
  } else if (inputValue.trim()) {
    searchInput.value = ""; // Clear the input field
    displayMovies(filteredMovies); // Display the filtered movies
  }
}

// Event Listeners to sort the movies
const alphabeticSortButton = document.getElementById("movie-sort-button-abc");
const dateSortButton = document.getElementById("movie-sort-button-date");

// Function to remove previous messages
function commentRemover() {
  const previousMessage = document.querySelector(".search-message");
  if (previousMessage) {
    previousMessage.remove();
  }
}

// Sorting in alphabetical order
alphabeticSortButton.addEventListener("click", () => {
  const alphabeticallySortedMovies = movies.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  // Clear any previous search messages
  commentRemover();

  main.innerHTML = ""; // Clear the main content
  displayMovies(alphabeticallySortedMovies); // Display sorted movies
});
/*
The commentRemover function will clear the "No results found. Try refining your search terms." message every time a new search is made. 
*/

// Sorting by date released
dateSortButton.addEventListener("click", () => {
  const dateSortedMovies = movies.sort((a, b) => a.movie_year - b.movie_year);

  // Clear any previous search messages
  commentRemover();

  main.innerHTML = ""; // Clear the main content
  displayMovies(dateSortedMovies); // Display sorted movies
});

// Back to the top button
const backToTopButton = document.getElementById("back-to-top-button");

// If the user scrolled the page more than 300px the button will show up
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// The Window will scroll back up on click
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
        top: 0,
  });
});

displayMovies(movies); // Initially displays the movies on the page
