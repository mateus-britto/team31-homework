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
  {
    id: 4,
    title: "The Matrix",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    movie_year: 1999,
    director: "Lana Wachowski, Lilly Wachowski",
    actors: [
      "Keanu Reeves",
      "Laurence Fishburne",
      "Carrie-Anne Moss",
      "Hugo Weaving",
      "Joe Pantoliano",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    price: "90.00",
  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    movie_year: 1994,
    director: "Frank Darabont",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    price: "80.00",
  },
  {
    id: 6,
    title: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    movie_year: 1994,
    director: "Quentin Tarantino",
    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson", "Bruce Willis", "Ving Rhames"],
    poster_url: "https://image.tmdb.org/t/p/original/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg",
    price: "110.00",
  },
  {
    id: 7,
    title: "Fight Club",
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    movie_year: 1999,
    director: "David Fincher",
    actors: ["Brad Pitt", "Edward Norton", "Meat Loaf", "Jared Leto", "Helena Bonham Carter"],
    poster_url: "https://image.tmdb.org/t/p/original/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    price: "95.00",
  },
  {
    id: 8,
    title: "Forrest Gump",
    description:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
    movie_year: 1994,
    director: "Robert Zemeckis",
    actors: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field", "Mykelti Williamson"],
    poster_url: "https://image.tmdb.org/t/p/original/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    price: "85.00",
  },
  {
    id: 9,
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    movie_year: 1972,
    director: "Francis Ford Coppola",
    actors: ["Marlon Brando", "Al Pacino", "James Caan", "Richard S. Castellano", "Robert Duvall"],
    poster_url: "https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    price: "130.00",
  },
  {
    id: 10,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    movie_year: 2001,
    director: "Peter Jackson",
    actors: [
      "Elijah Wood",
      "Ian McKellen",
      "Orlando Bloom",
      "Sean Bean",
      "Sean Astin",
      "Viggo Mortensen",
      "Liv Tyler",
      "Cate Blanchett",
      "John Rhys-Davies",
      "Billy Boyd",
    ],
    poster_url: "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    price: "140.00",
  },
  {
    id: 11,
    title: "The Lion King",
    description:
      "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    movie_year: 1994,
    director: "Roger Allers, Rob Minkoff",
    actors: [
      "Matthew Broderick",
      "Jeremy Irons",
      "James Earl Jones",
      "Whoopi Goldberg",
      "Rowan Atkinson",
    ],
    poster_url: "https://image.tmdb.org/t/p/original/b7oicyn6023fEIC9fqaoftEJfwt.jpg",
    price: "75.00",
  },
  {
    id: 12,
    title: "Gladiator",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    movie_year: 2000,
    director: "Ridley Scott",
    actors: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen", "Oliver Reed", "Richard Harris"],
    poster_url: "https://image.tmdb.org/t/p/original/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    price: "105.00",
  },
  {
    id: 13,
    title: "The Avengers",
    description:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    movie_year: 2012,
    director: "Joss Whedon",
    actors: [
      "Robert Downey Jr.",
      "Chris Evans",
      "Mark Ruffalo",
      "Chris Hemsworth",
      "Scarlett Johansson",
    ],
    poster_url: "https://image.tmdb.org/t/p/original/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    price: "160.00",
  },
  {
    id: 14,
    title: "Jurassic Park",
    description:
      "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
    movie_year: 1993,
    director: "Steven Spielberg",
    actors: ["Sam Neill", "Laura Dern", "Jeff Goldblum", "Richard Attenborough", "Bob Peck"],
    poster_url: "https://image.tmdb.org/t/p/original/9i3plLl89DHMz7mahksDaAo7HIS.jpg",
    price: "115.00",
  },
  {
    id: 15,
    title: "Titanic",
    description:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    movie_year: 1997,
    director: "James Cameron",
    actors: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Kathy Bates", "Frances Fisher"],
    poster_url: "https://image.tmdb.org/t/p/original/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    price: "125.00",
  },
];

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

    if (userInput.toLowerCase() === "yes") {
      let timerInput;
      do {
        timerInput = parseInt(prompt("Set a timer (in minutes)"), 10) * 60 * 1000; // Convert minutes to milliseconds
        if (userInput === null) return; // Handle cancel button in prompt
      } while (isNaN(timerInput)); // Ensures the user types a number

      let timer = document.getElementById("timer");

      const countdown = setInterval(() => {
        if (timerInput > 0) {
          timerInput -= 10; // Decrease by 10ms
          const minutes = Math.floor(timerInput / (60 * 1000));
          const seconds = Math.floor((timerInput % (60 * 1000)) / 1000);
          const milliseconds = Math.floor((timerInput % 1000) / 10);
          timer.innerText = `Make your choice \n${String(minutes).padStart(2, "0")}:${String(
            seconds
          ).padStart(2, "0")}:${String(milliseconds).padStart(2, "0")}`;
        } else {
          clearInterval(countdown); // Stop the timer
          timer.innerText = `Time's up! Search again.`;
          const alarmSound = document.getElementById("alarmSound");
          alarmSound.play();
          displayMovies(movies); // Refresh the screen when the time is up
        }
      }, 10); // Update every 10ms
    } else if (userInput.toLowerCase() === "no") {
      const previousMessage = document.querySelector(".search-message");
      timer.innerText = " ";
      if (previousMessage) {
        previousMessage.remove();
      }

      if (filteredMovies.length === 0 || inputValue === "") {
        // Checks if there are any movies or if the user typed something
        const searchMessage = document.createElement("p");
        searchMessage.setAttribute("class", "search-message");
        searchMessage.innerText = "No results found. Try refining your search terms.";
        searchMessageContainer.append(searchMessage);
        this.value = "";
      } else if (inputValue.trim()) {
        this.value = "";
        displayMovies(filteredMovies); // Displays the filtered movies
      }
    }

    // Clear any previous search messages
    const previousMessage = document.querySelector(".search-message");
    if (previousMessage) {
      previousMessage.remove();
    }

    if (filteredMovies.length === 0 || inputValue === "") {
      // Checks if there are any movies or if the user typed something
      const searchMessage = document.createElement("p");
      searchMessage.setAttribute("class", "search-message");
      searchMessage.innerText = "No results found. Try refining your search terms.";
      searchMessageContainer.append(searchMessage);
      this.value = "";
    } else if (inputValue.trim()) {
      this.value = "";
      displayMovies(filteredMovies); // Displays the filtered movies
    }
  }
});

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
