// Remove First and Last Character
const testString = "this is a test string";

function removeFirstAndLastCharacter(string) {
  const newString = string.slice(1, -1);
  console.log(newString);
}

// removeFirstAndLastCharacter(testString); // Uncomment to test

// Counting sheep...
const sheepArray = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countingSheep(array) {
  return array.filter((item) => item === true).length;
}
// console.log(countingSheep(sheepArray)); // Uncomment to test

// String ends with?
function stringEndsWith(str1, str2) {
  console.log(str1.endsWith(str2));
}

// stringEndsWith("abc", "bc"); // Uncomment to test
// stringEndsWith("abc", "d"); // Uncomment to test

// Odd or Even?
function oddOrEven(numbers) {
  if (numbers.length === 0) {
    return "even";
  }

  // Use reduce to calculate the sum of the numbers
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  if (sum % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
/* 
oddOrEven([0]); // Uncomment to test
oddOrEven([0, 1, 4]); // Uncomment to test
oddOrEven([0, -1, -5]); // Uncomment to test
 */
