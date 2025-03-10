// JavaScript 2 Project - Movie App

// Movies array
const movies = [
  {
    id: 1,
    title: "Interstellar",
    description:
      "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    movie_year: 2014,
    director: "Christopher Nolan",
    actors: [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain",
      "Michael Caine",
      "Casey Affleck",
      "Mackenzie Foy",
      "John Lithgow",
      "Ellen Burstyn",
      "Matt Damon",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    price: "120.00",
  },
  {
    id: 2,
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    movie_year: 2010,
    director: "Christopher Nolan",
    actors: [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Elliot Page",
      "Tom Hardy",
      "Ken Watanabe",
      "Dileep Rao",
      "Cillian Murphy",
      "Tom Berenger",
      "Marion Cotillard",
      "Michael Caine",
    ],
    poster_url: "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    price: "100.00",
  },
  {
    id: 3,
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    movie_year: 2008,
    director: "Christopher Nolan",
    actors: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhaal",
      "Gary Oldman",
      "Morgan Freeman",
      "Monique Gabriela Curnen",
      "Ron Dean",
      "Cillian Murphy",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    price: "150.00",
  },
];

// Variables
const body = document.body;
const main = document.getElementById("main-content");
const clearCommentsButton = document.getElementById("clear-comments-button");

// Function to create the card component
function cardCreator() {
  movies.forEach((item) => {
    const card = document.createElement("div");
    card.setAttribute("id", "card-component");
    card.setAttribute("class", "card-component");

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
    movieTitle.innerText = item.title;

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
        // If the user press the enter key
        const inputValue = this.value;
        if (inputValue.trim()) {
          const comment = document.createElement("p");
          comment.setAttribute("class", "comment-text")
          comment.innerHTML = `<strong>User review (${item.title})</strong>: <br> ${inputValue}`;
          commentWrapper.style.display = "block"; // Displays the hidden div with the comment
          commentWrapper.append(comment);
          body.append(commentWrapper);
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

// Function to rate the movies
function movieRater(movieRating) {
  const rating = parseInt(
    prompt("Type a number (1 to 5) to rate this movie from 1 to 5 stars"),
    10
  );

  if (rating >= 1 && rating <= 5) {
    movieRating.innerHTML = `Rated: ${"★".repeat(rating)}${"☆".repeat(5 - rating)}`;
    // Repeat and combine the filled and empty stars to create the rating (created with AI support).
  } else {
    alert("Please enter a valid rating between 1 and 5.");
  }
}

cardCreator();
