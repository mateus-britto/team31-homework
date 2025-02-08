// Ez Namey (Startup name generator) Optional

const firstWords = [
  "Easy",
  "Cool",
  "Savvy",
  "Technical",
  "Corporate",
  "Future",
  "Awesome",
  "Innovative",
  "Super",
  "Hyper",
];

const secondWords = [
  "Developers",
  "Engineers",
  "Professionals",
  "Scientists",
  "Humans",
  "Robots",
  "Inventors",
  "Technicians",
  "Coders",
  "Brothers",
];

const randomFirstNumber = Math.floor(Math.random() * 10);
const randomSecondNumber = Math.floor(Math.random() * 10);
const startupName = firstWords[randomFirstNumber] + " " + secondWords[randomSecondNumber];

console.log("The startup: " + startupName + " contains 16 characters");