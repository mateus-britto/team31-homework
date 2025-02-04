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

const randomNumber = Math.floor(Math.random() * 10);
let startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log(startupName);