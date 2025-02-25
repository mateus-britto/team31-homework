// 0.1 Running your Javascript

/* console.log("Hello world!");
console.warn("Something is about to happen...");
console.error("KABOOOOM"); */

// 0.2 Variables & Scope

// 2. Can you help me fix my code?
const name = "Alice";
const age = 16;
const country = "USA";
let message = ""; // Change to let
let status = ""; // Change to let

if (age < 18) {
  status = "minor";
} else {
  status = "adult";
}

message = `${name} is a ${status} from ${country}.`;

//console.log(message); // uncomment to see the result

// 3. Why is this code not working?
const canSee = true;
let room = ""; // Declare the room variable here so it can be used inside and outside the if statement

if (canSee) {
  room = "This room is not dark";
} else {
  room = "This room is pitch black";
}
// console.log(room); uncomment to see the result

// 0.3 Data types

// 1. Defining variables
const team = "Team 31";
const members = 14;
const isGood = true;
const undefinedVar = undefined;
const nullVar = null;
const emptyArr = [];
const emptyObj = {};

// 3. Guess the output
const a = 10;
const b = -10;
const c = "100";
const d = "no";
const e = true;
const f = false;
const g = null;

// guess the output of the following statements
/* console.log("#1", a + a, typeof (a + a)); // output is "#1 20 number"
console.log("#2", a + b, typeof (a + b)); // output is "#2 0 number"
console.log("#3", a + c, typeof (a + c)); // output is "#3 1010 string"
console.log("#4", a + d, typeof (a + d)); // output is "#4 10no string"
console.log("#5", a + e, typeof (a + e)); // output is "#5 11 number"
console.log("#6", a + f, typeof (a + f)); // output is "#6 10 number"
console.log("#7", a + g, typeof (a + g)); // output is "#7 10 number" */

// 0.4 Conditions

// 1. Check age function
function ageCheck(age) {
  if (0 < age && age < 12) {
    return "Child";
  } else if (13 < age && age < 19) {
    return "Teenager";
  } else if (age > 20) {
    return "Adult";
  }
}

//console.log(ageCheck(10)); // output is "Child"
//console.log(ageCheck(15)); // output is "Teenager"
//console.log(ageCheck(25)); // output is "Adult"

// 2. Positive or negative function
function positiveOrNegative(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

//console.log(positiveOrNegative(10)); // output is "Positive"
//console.log(positiveOrNegative(-10)); // output is "Negative"
//console.log(positiveOrNegative(0)); // output is "Zero"

// 3. Check leap year function
function checkLeapYear(year) {
  if (year % 4 === 0) {
    return "Leap year";
  } else {
    return "Not a leap year";
  }
}

//console.log(checkLeapYear(2020)); // output is "Leap year"
//console.log(checkLeapYear(2021)); // output is "Not a leap year"

// 0.5 Loops
// 1. Print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
  //console.log(i); // Uncomment this line to test
}

// 2. Print a countdown from 10 to 1 using a for loop
for (let i = 10; i >= 1; i--) {
  //console.log(i); // Uncomment this line to test
}

// 3. Print even numbers between 1 and 20 using a for loop.
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    //console.log(i); // Uncomment this line to test
  }
}

const names = ["john", "jane", "joe"];

for (let i = 0; i < names.length; i++) {
  //console.log(names[i]); // Uncomment this line to test
}

// 0.6 Arrays

// 1. Create an array of five favorite foods and print each item using a for..of loop.
const favoriteFoods = ["pizza", "pasta", "burger", "barbecue", "pancakes"];
for (let food of favoriteFoods) {
  //console.log(food); // Uncomment this line to test
}

// 2. Write a function that takes an array of numbers and returns the sum of all elements. What is the sum of [5, 10, -98, 17.5, 365, -2.5]?
//const array = [5, 10, -98, 17.5, 365, -2.5];

function sumOfElements(arr) {
  let sum = 0;

  for (element of array) {
    sum += element;
  }
  console.log(sum);
}
//sumOfElements(array)

// 3. Given an array [10, 20, 30, 40, 50], write code to remove the last element and add 60 at the end.
const array = [10, 20, 30, 40, 50];

function removeLastElement(arr) {
  arr.pop();
  arr.push(60);
  return arr;
}
//console.log(removeLastElement(array));

// 4. Write a function that finds the largest number in an array
function findLargestNumber(arr) {
  let largestNumber = 0;

  for (number of arr) {
    if (number > largestNumber) {
      largestNumber = number;
    }
  }
  return largestNumber;
}
//console.log(findLargestNumber(array));

// 0.7 Objects

// 1/2/3/4
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const booksArray = [
  {
    title: "Random Book",
    author: "Random Author",
    yearPublished: "2000",
    getAge() {
      return `The book is ${currentYear - this.yearPublished} years old.`;
    },
  },
  {
    title: "Random Book 2",
    author: "Random Author 2",
    yearPublished: "2010",
    getAge() {
      return `The book is ${currentYear - this.yearPublished} years old.`;
    },
  },
  {
    title: "Random Book 3",
    author: "Random Author 3",
    yearPublished: "2015",
    getAge() {
      return `The book is ${currentYear - this.yearPublished} years old.`;
    },
  },
];

const book = {
  title: "Random Book",
  author: "Random Author",
  yearPublished: "2000",
  getAge() {
    return `The book is ${currentYear - this.yearPublished} years old.`;
  },
};

function sortBook(obj) {
  return `${obj.title} by ${obj.author} published in ${obj.yearPublished}`;
}
//console.log(sortBook(book));

function printBookTitles(arr) {
  const titlesArray = [];

  for (let i = 0; i < arr.length; i++) {
    titlesArray.push(arr[i].title);
  }
  return titlesArray;
}
//console.log(printBookTitles(booksArray));

// 0.8 Functions

//1. Write a function greet that takes a name as a parameter and returns a greeting message
function greet(name) {
  return `Hello, ${name}!`; // "Hello, Alice!"
}
//console.log(greet("Alice")); // "Hello, Alice!"

// 2. Write a function add that takes two numbers and returns their sum.

function add(num1, num2) {
  return num1 + num2;
}
//console.log(add(5, 3)); // 8

// 3. Write a function square that returns the square of a number. Then, write another function sumOfSquares that takes two numbers and returns the sum of their squares.
function square(num) {
  return num * num;
}
//console.log(square(4));

function sumOfSquares(num1, num2) {
  return Math.pow(num1, 2) + Math.pow(num2, 2);
}
//console.log(sumOfSquares(3, 4));
