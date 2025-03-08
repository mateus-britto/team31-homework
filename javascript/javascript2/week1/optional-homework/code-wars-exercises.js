// Remove First and Last Character
const testString = "this is a test string";

function removeFirstAndLastCharacter(string) {
  const newString = string.split("");

  newString.splice(0, 1);
  newString.splice(newString.length - 1, 1);

  console.log(newString.join(""));
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
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === null || array[i] === undefined) {
      continue;
    } else if (array[i] === true) {
      count += 1;
    } else {
      continue;
    }
  }
  console.log(count);
}

// countingSheep(sheepArray); // Uncomment to test

// String ends with?
function stringEndsWith(str1, str2) {
  console.log(str1.endsWith(str2));
}

// stringEndsWith("abc", "bc"); // Uncomment to test
// stringEndsWith("abc", "d"); // Uncomment to test

// Odd or Even?
function oddOrEven(numbers) {
  let sum = 0;

  numbers.forEach((number) => {
    sum += number;
  });

  if (sum % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

// oddOrEven([0]); // Uncomment to test
// oddOrEven([0, 1, 4]); // Uncomment to test
// oddOrEven([0, -1, -5]); // Uncomment to test