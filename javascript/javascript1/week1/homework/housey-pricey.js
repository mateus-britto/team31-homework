// Housey pricey (A house price estimator)

let width;
let depth;
let hight;
let volumeInMeters = width * depth * hight;
let gardenSizeInM2;

let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

// Pedro's house
console.log("Peter's House");
volumeInMeters = 8 * 10 * 10;
gardenSizeInM2 = 100;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
petersHousePrice = 2500000;

if (petersHousePrice > housePrice) {
  console.log(
    "The average price for a house of this size is " + housePrice + ". You are being overcharged."
  );
} else if (petersHousePrice === housePrice) {
  console.log("The house is fair priced.");
} else {
  console.log(
    "The average price for a house of this size is " + housePrice + ". It is a great deal!"
  );
}

// Julia's house
console.log("Julia's House");
volumeInMeters = 5 * 11 * 8;
gardenSizeInM2 = 70;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
juliasHousePrice = 1000000;

if (juliasHousePrice > housePrice) {
  console.log(
    "The average price for a house of this size is " + housePrice + ". You are being overcharged."
  );
} else if (juliasHousePrice === housePrice) {
  console.log("The house is fair priced.");
} else {
  console.log(
    "The average price for a house of this size is " + housePrice + ". It is a great deal!"
  );
}

// Using a function to calculate the price
function housePriceCalculator(width, depth, hight, gardenSizeInM2, yourHousePrice) {
  let volumeInMeters = width * depth * hight;
  let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

  if (yourHousePrice > housePrice) {
    console.log(
      "The average price for a house of this size is " + housePrice + ". You are being overcharged."
    );
  } else if (yourHousePrice === housePrice) {
    console.log("The house is fair priced.");
  } else {
    console.log(
      "The average price for a house of this size is " + housePrice + ". It is a great deal!"
    );
  }
}

//Uncomment the following line to test the function
//housePriceCalculator(5, 11, 8, 70, 1000000);
