// Exercise 1 - Favorite dishes
const favoriteDishes = ["barbecue", "pizza", "sushi", "pasta", "burger"];
const foodsList = document.querySelector("#foods-list");

// Iterate through favoriteDishes, create an li element, change its innerHTML to a dish in favoriteDishes, and append the food to the foodsList.
/* favoriteDishes.forEach((item) => {
  const food = document.createElement("li");
  food.innerHTML = item;
  foodsList.append(food);
}); */

// Exercise 2 - Podcast
const podcasts = [
  {
    name: "The mystery om of Johan Klausen Varbourg",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Tips about dogs with small legs",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "You, me, we and us",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Breakfast news - Dinner edition",
  },
];

const body = document.body;
const podcastsList = document.createElement("ul");
body.append(podcastsList);

podcasts.forEach((item) => {
  const podcastsItem = document.createElement("li");
  const podcastTitle = document.createElement("h1");
  podcastTitle.innerHTML = item.name;

  podcastsItem.append(podcastTitle);
  imageInserter(item.imageUrl, podcastsItem); // Use imageInserter to create and append the image
  podcastsList.append(podcastsItem);
});

// Exercise 3 - Image inserter
function imageInserter(imageUrl, elementToAppendImageTo) {
  const image = document.createElement("img");
  image.setAttribute("src", imageUrl ? imageUrl : "");

  elementToAppendImageTo.append(image);
}
// Should append a img tag to the body with the picture from 'https://picsum.photos/536/354'
//imageInserter("https://picsum.photos/536/354", body);

// Exercise 4 - Simple event listener

const button = document.createElement("button");
button.innerText = "Click me...";
body.append(button);

let buttonToggle = false; // Used to toggle the button back and fourth.

button.addEventListener("click", () => {
  if (buttonToggle) {
    button.innerText = "Button clicked";
  } else {
    button.innerText = "Click me...";
  }
  buttonToggle = !buttonToggle;
});

// Exercise 5 - Light mode dark mode
const lightSwitch = document.createElement("button");
lightSwitch.innerText = "ON";
body.append(lightSwitch);

let toggle = false;

lightSwitch.addEventListener("click", () => {
  if (toggle) {
    lightSwitch.innerText = "ON";
    body.style.backgroundColor = "white";
    body.style.color = "black";
  } else {
    lightSwitch.innerText = "OFF";
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }
  toggle = !toggle;
});