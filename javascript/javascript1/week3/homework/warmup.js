// Warmup

const names = ["Peter", "Ahmad", "Yana", "kristina", "Rasmus", "Samuel", "katrine", "Tala"];
const nameToRemove = "Ahmad";

// Write some code here
//Method 1
const index = names.indexOf(nameToRemove); //Find the index of the item in to remove.
names.splice(index, 1); // Splice removes a number of items from the array starting from a defined index.

//Method 2
// The filter() method will create a new array based on "names" based on specific conditions.
const updatedNames = names.filter((name) => name !== nameToRemove); // Will contain all the items except "namesTo remove".
console.log(updatedNames);
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
