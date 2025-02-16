// Exercise 5 - Candy helper

const boughtCandyPrices = [];
const amountToSpend = (Math.random() * 100).toFixed(2); // Use toFixed to display only two digits after the decimal point.

// Function to add candy to the array.
function addCandy(candyType, weight) {
  let price = 0;

  if (candyType.toLowerCase() === "sweet") {
    price = 0.5 * weight;
  } else if (candyType.toLowerCase() === "chocolate") {
    price = 0.7 * weight;
  } else if (candyType.toLowerCase() === "toffee") {
    price = 1.1 * weight;
  } else if (candyType.toLowerCase() === "chewing-gum") {
    price = 0.03 * weight;
  }

  boughtCandyPrices.push(price);
  // This function does not need a return statement because it is modifying a global variable (boughtCandyPrices).
}

// Function to calculate the total spent.
function canBuyMoreCandy() {
  let totalSpent = 0;
  let i = 0;
  const candyCount = boughtCandyPrices.length; // Store the length in a variable

  while (i < candyCount) {
    totalSpent += boughtCandyPrices[i];
    i++;
  }

  console.log("Total spent: " + totalSpent);
  console.log("Amount to spend: " + amountToSpend);

  if (totalSpent < amountToSpend) {
    console.log("You can buy more, so please do!");
  } else {
    console.log("Enough candy for you!");
  }
}

console.log("Amount to spend: " + amountToSpend);
addCandy("sweet", 30);
canBuyMoreCandy();
addCandy("chocolate", 20);
canBuyMoreCandy();
addCandy("toffee", 10);
canBuyMoreCandy();
