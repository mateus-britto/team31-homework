//Variables
const body = document.body;

// User name input
const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("required", "");
nameInput.setAttribute("placeholder", "Enter your name");
nameInput.setAttribute("id", "animal-input");
nameInput.setAttribute("class", "animal-input");

// Display name button
const displayButton = document.createElement("button");
displayButton.setAttribute("id", "display-button");
displayButton.setAttribute("class", "button display-button");
displayButton.innerText = "Add Spirit Animal";

// Displayed name container
const nameDisplayContainer = document.createElement("div");
nameDisplayContainer.setAttribute("id", "image-container");
nameDisplayContainer.setAttribute("class", "image-container");

// User name
const userName = document.createElement("p");
userName.setAttribute("id", "user-name");
userName.setAttribute("class", "user-name");

// Button to change the Spirit Animal
const newSpiritAnimalButton = document.createElement("button");
newSpiritAnimalButton.setAttribute("id", "new-spirit-animal-button");
newSpiritAnimalButton.setAttribute("class", "button new-spirit-animal-button");
newSpiritAnimalButton.innerText = "Change Spirit Animal";

// Display toggle label click
const displayClickLabel = document.createElement("label");
displayClickLabel.setAttribute("for", "display-click-toggle");
displayClickLabel.setAttribute("id", "display-click-label");
displayClickLabel.setAttribute("class", "label display-click-label");
displayClickLabel.innerText = "Display animal spirit by clicking the Add Animal Spirit button: ";

// Display type toggle click
const displayClickToggle = document.createElement("input");
displayClickToggle.setAttribute("type", "radio");
displayClickToggle.setAttribute("name", "option");
displayClickToggle.setAttribute("value", "click");
displayClickToggle.setAttribute("id", "display-click-toggle");
displayClickToggle.setAttribute("class", "toggle display-click-toggle");
displayClickLabel.append(displayClickToggle);

// Display toggle label hover
const displayHoverLabel = document.createElement("label");
displayHoverLabel.setAttribute("for", "display-hover-toggle");
displayHoverLabel.setAttribute("id", "display-type-hover-label");
displayHoverLabel.setAttribute("class", "label display-hover-label");
displayHoverLabel.innerText = "Display animal spirit by hovering the mouse over the input: ";

// Display type toggle hover
const displayHoverToggle = document.createElement("input");
displayHoverToggle.setAttribute("type", "radio");
displayHoverToggle.setAttribute("name", "option");
displayHoverToggle.setAttribute("value", "hover");
displayHoverToggle.setAttribute("id", "display-hover-toggle");
displayHoverToggle.setAttribute("class", "toggle display-hover-toggle");
displayHoverLabel.append(displayHoverToggle);

// Appending all items
body.append(
  nameInput,
  displayClickLabel,
  displayHoverLabel,

  displayButton,
  nameDisplayContainer,
  newSpiritAnimalButton
);

// Spirit Animals array
const spiritAnimals = [
  "Lion",
  "Eagle",
  "Wolf",
  "Dolphin",
  "Owl",
  "Tiger",
  "Bear",
  "Fox",
  "Butterfly",
  "Horse",
];
// Event Listeners
function checkSelection() {
  const clickToggle = displayClickToggle.checked;
  const hoverToggle = displayHoverToggle.checked;

  //Remove existing event listener to avoid multiple event handlers
  displayButton.removeEventListener("click", handleClick);
  displayButton.removeEventListener("mouseover", handleHover);

  // Check which input is selected
  if (clickToggle) {
    displayButton.addEventListener("click", handleClick);
  } else if (hoverToggle) {
    nameInput.addEventListener("mouseover", handleHover);
  }
}

// Handle click function
function handleClick() {
  const inputText = nameInput.value;

  if (inputText === "") {
    userName.innerText = "Please type your name";
    nameDisplayContainer.append(userName);
  } else {
    userName.innerText = inputText;
    addSpiritAnimal(spiritAnimals);
    nameDisplayContainer.append(userName);
  }
}

// Handle hover function
function handleHover() {
  const inputText = nameInput.value;

  if (inputText === "") {
    userName.innerText = "Please type your name";
    nameDisplayContainer.append(userName);
  } else {
    userName.innerText = inputText;
    addSpiritAnimal(spiritAnimals);
    nameDisplayContainer.append(userName);
  }
}

// Add the Spirit Animal function
function addSpiritAnimal(animals) {
  const randomIndex = Math.floor(Math.random() * 10);
  userName.append(` - The ${animals[randomIndex]}`);
}

// Change Animal Spirit
newSpiritAnimalButton.addEventListener("click", () => {
  const inputText = nameInput.value;
  userName.innerText = "";
  userName.innerText = inputText;
  addSpiritAnimal(spiritAnimals);
  nameDisplayContainer.append(userName);
});

// Add event listeners to radio buttons to check selection on change
displayClickToggle.addEventListener("change", checkSelection);
displayHoverToggle.addEventListener("change", checkSelection);

// Initial check to set the correct event listener
checkSelection();
