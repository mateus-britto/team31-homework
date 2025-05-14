// Extracts command-line arguments passed to the script, excluding the first two (node executable and script file path).
const args = process.argv.slice(2);

// Converts the command-line arguments from strings to numbers.
const numbers = args.map(Number);

// Calculates the sum of the numbers in the array.
const sum = numbers.reduce((a, b) => a + b, 0);

// Calculates the average by dividing the sum by the number of elements in the array.
const average = sum / numbers.length;

// Outputs the calculated average to the console.
console.log("Average:", average);
