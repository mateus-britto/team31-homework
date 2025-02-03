// Exercise 1
console.log("===== PART 3 =====");

// Exercise 2
const newStoreName = owner + "'s Pizzeria";

// Exercise 3
const pizzas = [
  "Margherita Pizza",
  "Pesto Pizza",
  "Pepperoni Pizza",
  "BBQ Chicken Pizza",
  "White Pizza",
];
const pizzaPrices = [90, 120, 120, 130, 110];


// Exercise 4
console.log(newStoreName);
console.log("Our menu:");
console.log("#1", pizzas[0], "-", pizzaPrices[0], "DKK");
console.log("#2", pizzas[1], "-", pizzaPrices[1], "DKK");
console.log("#3", pizzas[2], "-", pizzaPrices[2], "DKK");
console.log("#4", pizzas[3], "-", pizzaPrices[3], "DKK");
console.log("#5", pizzas[4], "-", pizzaPrices[4], "DKK");

// Exercise 5
const order = [0, 1, 2, 3, 4];
console.log(order);

const totalPrice =
  pizzaPrices[order[0]] +
  pizzaPrices[order[1]] +
  pizzaPrices[order[2]] +
  pizzaPrices[order[3]] +
  pizzaPrices[order[4]];

// Exercise 6
console.log("Total price:", totalPrice.toFixed(2), "DKK");

// Bonus Tasks

// Bonus 1
const discountedPrice = pizzaPrices[order[0]] * 0.2;
console.log("Discounted price:", (totalPrice - discountedPrice).toFixed(2), "DKK");

// Bonus 2
for (let i = 0; i < pizzas.length; i++) {
  if (
    pizzas[i] === "Margherita Pizza" ||
    pizzas[i] === "Pesto Pizza" ||
    pizzas[i] === "White Pizza"
  ) {
    pizzas[i] += " (v)";
  }
}
console.log("#1", pizzas[0], "-", pizzaPrices[0], "DKK");
console.log("#2", pizzas[1], "-", pizzaPrices[1], "DKK");
console.log("#3", pizzas[2], "-", pizzaPrices[2], "DKK");
console.log("#4", pizzas[3], "-", pizzaPrices[3], "DKK");
console.log("#5", pizzas[4], "-", pizzaPrices[4], "DKK");