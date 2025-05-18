// Extracts command-line arguments passed to the script, excluding the first two (node executable and script file path).
const args = process.argv.slice(2);

// Check for empty input
if (args.length === 0) {
  console.error("Error: Please provide at least one number as a command-line argument.");
  process.exit(1);
}

// Converts the command-line arguments from strings to numbers.
const numbers = args.map(Number);

// Validate all inputs are numbers
if (numbers.some(isNaN)) {
  console.error("Error: All arguments must be valid numbers.");
  process.exit(1);
}

// Calculates the sum of the numbers in the array.
const sum = numbers.reduce((a, b) => a + b, 0);

// Calculates the average by dividing the sum by the number of elements in the array.
const average = sum / numbers.length;

// Outputs the calculated average to the console.
console.log("Average:", average);
