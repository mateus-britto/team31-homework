// Exercise 1
const balance = 1000;

if (balance <= 0) {
  console.log("Please deposit some money!");
} else if (balance > 0 && balance <= 1000) {
  console.log("Your balance is looking okay.");
} else if (balance > 1000 && balance <= 3000) {
  console.log("Your balance is looking good.");
} else if (balance > 3000 && balance <= 10000) {
  console.log("Your balance is fantastic.");
} else if (balance > 10000) {
  console.log("Your balance is AMAZING!");
}

// Exercise 2
function getCircleArea(radius) {
  return Math.PI * radius * radius;
}

console.log(getCircleArea(10));

// Exercise 3
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(30));

// Exercise 4
for (let i = 74; i <= 98; i++) {
  console.log(i);
}

// Exercise 5
function logString(stringToLog, numberOfTimesToLog) {
  for (let i = 0; i < numberOfTimesToLog; i++) {
    console.log(stringToLog);
  }
}

logString("Hello", 5);

// Exercise 6

emailList =
  "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com";

function sendEmailTo(recipient) {
  recipient = emailList.split("|");

  for (let i = 0; i < recipient.length; i++) {
    console.log("Email sent to: " + recipient[i]);
  }
}

sendEmailTo(emailList);

// Extra exercise
/*
Write a function that converts a date from "YYYY-MM-DD" format into "DD-MM-YYYY" format.
Create a function called convertDate that takes a single parameter, dateString, which is a string in the format "YYYY-MM-DD".
Return the formatted date as a string that the output follows "DD-MM-YYYY"
*/

function convertDate(dateString) {
  dateString = dateString.split("-");

  console.log(dateString[2] + "-" + dateString[1] + "-" + dateString[0]);
}

convertDate("2020-11-20"); //Should return 20-11-2020
