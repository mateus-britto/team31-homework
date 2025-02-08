// Housey pricey (A house price estimator)

// Peter's house
console.log("Peter's House");
let volumeInMeters = 8 * 10 * 10;
let gardenSizeInM2 = 100;
let averageHousePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
const petersHousePrice = 2500000;

if (petersHousePrice > averageHousePrice) {
  console.log(
    "The average price for a house of this size is " + averageHousePrice + ". You are being overcharged."
  );
} else if (petersHousePrice === housePrice) {
  console.log("The house is fair priced.");
} else {
  console.log(
    "The average price for a house of this size is " + averageHousePrice + ". It is a great deal!"
  );
}

// Julia's house
console.log("Julia's House");
volumeInMeters = 5 * 11 * 8;
gardenSizeInM2 = 70;
averageHousePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
juliasHousePrice = 1000000;

if (juliasHousePrice > averageHousePrice) {
  console.log(
    "The average price for a house of this size is " + averageHousePrice + ". You are being overcharged."
  );
} else if (juliasHousePrice === averageHousePrice) {
  console.log("The house is fair priced.");
} else {
  console.log(
    "The average price for a house of this size is " + averageHousePrice + ". It is a great deal!"
  );
}

// Using a function to calculate the price
function housePriceCalculator(width, depth, hight, gardenSizeInM2, yourHousePrice) {
  const volumeInMeters = width * depth * hight;
  const averageHousePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

  if (yourHousePrice > housePrice) {
    console.log(
      "The average price for a house of this size is " + averageHousePrice + ". You are being overcharged."
    );
  } else if (yourHousePrice === averageHousePrice) {
    console.log("The house is fair priced.");
  } else {
    console.log(
      "The average price for a house of this size is " + averageHousePrice + ". It is a great deal!"
    );
  }
}

//Uncomment the following line to test the function
//housePriceCalculator(5, 11, 8, 70, 1000000);
