// Exercise 1
console.log("===== PART 4 =====");

// Exercise 2
order2 = [1, 2, 2];

// Exercise 3
/* totalPrice2 = pizzaPrices[order2[0]] + pizzaPrices[order2[1]] + pizzaPrices[order2[2]];
console.log(totalPrice2);
discountedPrice2 = totalPrice2 - pizzaPrices[order2[0]] * 0.2;
console.log("Total price:", discountedPrice2, "DKK"); */

// Exercise 4
const plasticBag = 5;
let addPlasticBag = true;

// Exercise 5
const vat = 0.25;

// Test Orders
order3 = [3, 4, 4];
// order3 = [0, 0, 0]; uncomment this line to test the order.

totalPrice3 = pizzaPrices[order3[0]] + pizzaPrices[order3[1]] + pizzaPrices[order3[2]];
firstPizzaDiscount = pizzaPrices[order3[0]] * 0.2;
discountedPrice3 = totalPrice3 - firstPizzaDiscount;

console.log("Order:", order3);
console.log("Total price:", totalPrice3.toFixed(2), "DKK");
console.log("Discount for the first pizza:", firstPizzaDiscount.toFixed(2), "DKK");
console.log("Add plastic bag:", plasticBag.toFixed(2) + " DKK");
console.log("VAT (25%):", (discountedPrice3 * vat).toFixed(2), "DKK");

if (addPlasticBag) {
  discountedPrice3 += plasticBag;
}

let finalPrice = discountedPrice3 + discountedPrice3 * vat;

if (totalPrice3 > 300) {
    let deliveryFee = 50
    finalPrice += deliveryFee;   
    console.log("Delivery fee:", deliveryFee.toFixed(2), "DKK");
}

console.log("Final price:", finalPrice.toFixed(2), "DKK");
