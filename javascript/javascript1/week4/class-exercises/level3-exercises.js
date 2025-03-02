// 3.1 Implement a Guess-the-Number Game

// Prompt the user to enter their name

// Using Node.js
// To run the code in VS Code, we need to import the "readline" module, which creates an interface for reading data from the user input (process.stdin) and writing the process output (process.stdout). readline.createInterface() sets the interface for input and output.

//Uncomment the code bellow to test it.
/* 
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// readline.question() displays the prompt and waits for the user input. Once the user provides input, the callback function is executed with the user input as its parameter. The callback function logs the message that includes the user name. The readline.close() is called to stop accepting user input.

readline.question("Please enter your name: ", (userName) => {
  console.log(`Hello, ${userName}!`);
  readline.close();
});
*/

// Using an HTML page

// The prompt function displays a dialog box in the browser that prompts the user to enter some text.
// const userName = prompt("Please enter your name:"); // Uncomment to test
// Logs the message on the browser's console.
// console.log(`Hello, ${userName}!`); // Uncomment to test

// 3. Guessing game (using the HTML page).
function guessingGame() {
  let counter = 0;
  const randomNumber = Math.floor(Math.random() * 100);
  console.log("Guess a number between 0 and 99");

  while (counter < 10) {
    // Allow 10 attempts.
    const userInput = prompt("Enter your guess: ");
    if (userInput === null) {
      // Stops the game if the user presses the cancel button (the user input will be null).
      console.log("Game cancelled.");
      return;
    }

    const userNumber = parseInt(userInput); // Make sure the input is a number.
    if (isNaN(userNumber)) {
      console.log("Invalid input. Please enter a number.");
      continue; // Allows the user to try again without incrementing the counter.
    }

    counter++;
    if (userNumber > randomNumber) {
      console.log("Too high!");
    } else if (userNumber < randomNumber) {
      console.log("Too low!");
    } else {
      console.log(
        `Congratulations! You guessed it. The number is ${randomNumber}! It took you ${counter} tries.`
      );
      return;
    }
  }
  console.log(`Sorry, you've used all attempts. The number was ${randomNumber}.`);
}

guessingGame();
