// Warmup

const names = ["Peter", "Ahmad", "Yana", "kristina", "Rasmus", "Samuel", "katrine", "Tala"];
const nameToRemove = "Ahmad";

// Write some code here
//Method 1
const index = names.indexOf(nameToRemove); //Find the index of the item in to remove.
if (index >= 0) { // Use this check to prevent the index to be returned as -1, deleting the last item in the array.
  names.splice(index, 1);
}

//Method 2
// The filter() method will create a new array based on "names" based on specific conditions.
const updatedNames = names.filter((name) => name !== nameToRemove); // Will contain all the items except "nameToRemove".
console.log(updatedNames);
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
