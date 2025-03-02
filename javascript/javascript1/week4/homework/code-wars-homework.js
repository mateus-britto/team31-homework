// Exercise 1 - Vowel Count

const testStr = "this is a test string";

function vowelCounter(string) {
  // Method 1 - regular expression ( I asked AI to generate the regular expression.)
  const regex = /[aeiouAEIOU]/g; // Regular expression that checks for the given vowels be it lower or upper case.
  const vowels = string.match(regex);

  //return `The string contains ${vowels.length} vowels.`; // Uncomment to test.

  // Method 2 - for loops
  const vowelsArray = [];
  // Simple for loop
  /* 
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      vowelsArray.push(string[i]);
    } else if (string[i] === "e") {
      vowelsArray.push(string[i]);
    } else if (string[i] === "i") {
      vowelsArray.push(string[i]);
    } else if (string[i] === "o") {
      vowelsArray.push(string[i]);
    } else if (string[i] === "u") {
      vowelsArray.push(string[i]);
    }
  } 
  */

  // Switch statement
  for (let i = 0; i < string.length; i++) {
    switch (string[i].toLowerCase()) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vowelsArray.push(string[i]);
        break;
    }
  }
  //  return `The string contains ${vowelsArray.length} vowels.`; // Uncomment to test.
}

// console.log(vowelCounter(testStr)); // Uncomment to test.

// Exercise 2 - Square Every Digit

function squareEveryDigit(number) {
  const squaredNumbers = [];
  number = number.toString().split(""); // Convert the number to a string and separate each number.

  for (let i = 0; i < number.length; i++) {
    squaredNumbers.push(Math.pow(number[i], 2)); // Use Math.pow() to square each number.
  }

  return parseInt(squaredNumbers.join("")); // Convert the string to integer and return it.
}

//console.log(squareEveryDigit(9119));
//console.log(squareEveryDigit(765));

// Exercise 3 - Highest and Lowest

function highAndLow(number) {
  number = number.split(" "); // Split the numbers into an array.

  let highest = 0;
  let lowest = 9999999;

  for (let i = 0; i < number.length; i++) {
    if (parseInt(number[i]) > highest) {
      // Convert the strings to numbers before comparing them.
      highest = number[i];
    }
  }
  for (let i = 0; i < number.length; i++) {
    if (parseInt(number[i]) < lowest) {
      lowest = number[i];
    }
  }

  return `${highest} ${lowest}`;
}

//console.log(highAndLow("1 2 3 4 5"));
//console.log(highAndLow("1 2 -3 4 5"));
//console.log(highAndLow("1 9 3 4 -5"));
