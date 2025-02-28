// 1.1 Implement Student Grades

// 2. Store Students in an Array
const students = [];

// 1. Create Student Objects - 6. Add Grades Dynamically
function createStudent(name, age, grades) {
  const student = {
    name,
    age,
    grades,
    addGrade: function (newGrade) {
      this.grades.push(newGrade); // .this refers to the student object.
    },
  };

  students.push(student);

  return students;
}

// Example of adding a grade to a student after creation
createStudent("Mateus", 36, [6, 8, 10]);
students[0].addGrade(9); // Adding a new grade to Mateus
createStudent("Marcos", 36, [8, 8, 9]);
createStudent("Marcelo", 36, [5, 9, 8]);

// 3. Calculate Average Grade
function calculateAverageStudentGrade(student) {
  let sum = 0;

  for (let i = 0; i < student.grades.length; i++) {
    sum += student.grades[i];
  }

  return (sum / student.grades.length).toFixed(2);
}

calculateAverageStudentGrade(students[0]);

// 4. Find the Best Student
function findTopStudent(students) {
  let highestGrade = 0;
  let topStudent;

  for (let i = 0; i < students.length; i++) {
    if (students[i].grades[i] > highestGrade) {
      highestGrade = students[i].grades[i];
      topStudent = students[i].name;
    }
  }
  console.log(`The top student is ${topStudent}`);
}

//findTopStudent(students); // Uncomment to test.

// 5. Display Student Information
function displayStudentInfo(student) {
  for (let i = 0; i < student.length; i++) {
    console.log(
      `${student[i].name}, Age: ${student[i].age}, Average grade: ${calculateAverageStudentGrade(
        student[i]
      )}`
    );
  }
}

//displayStudentInfo(students); // Uncomment to test.

// 1.2 Review IMDB's code
// Function to get high rated movies from a list

// Example movie list
let movieList = [
  { title: "Interstellar", rating: 8.6 },
  { title: "The Room", rating: 3.7 },
  { title: "The Godfather", rating: 9.2 },
  { title: "Cars", rating: 7.1 },
];

// Function description:
// This function iterates through an array of objects. If the rating of each movie is greater than or equal to 8, it pushes that movie to an empty array created inside the function and returns that array.
function getHighRatedMovies(movies) {
  let highRatedMovies = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].rating >= 8) {
      highRatedMovies.push(movies[i].title);
    }
  }
  return highRatedMovies;
}

// Logging high rated movies to the console
// console.log(getHighRatedMovies(movieList)); // Uncomment to test

// 1.3 Review the behavior of JS

const a = 10;
const b = -10;
const c = "100";
const d = "no";
const e = {
  name: "John",
};
const f = [1, 2, 3];
const h = true;

// guess the output of the following statements
/* 
console.log("#1", a + a); // 20
console.log("#2", a + b); // 0
console.log("#3", a + c); // "10100"
console.log("#4", a + d); // "10no"
console.log("#5", a + e); // "10[object Object]"
console.log("#6", a + e["name"]); // "10John"
console.log("#7", a + e["age"]); // "10undefined"
console.log("#8", a + f); // "101,2,3"
console.log("#9", a + f[1]); // 12
console.log("#10", a + h); // 11
 */

// 1.4 Troubleshoot issue with grades

function calculateAverageGrade(students) {
  let total = 0;
  let count = 0;

  for (let i = 0; i < students.length; i++) {
    let grade = students[i].grade;

    if (grade > 0) {
      total += grade;
      count++;
    } else {
      console.log("Invalid grade for student: " + students[i].name);
    }
  }

  return (total / count).toFixed(2);
  //Other than add ".toFixed(2)" i could not find any issues with this function
}

let studentsList = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: -10 },
  { name: "Charlie", grade: 85 },
  { name: "David", grade: 100 },
  { name: "Eva", grade: "A" },
];

//console.log("Average grade:", calculateAverageGrade(studentsList)); // Uncomment to test
// Expected Output: Average grade: 91.66

// 1.5 Implement a Recipe Management System

// 1. Create a list with the below recipes. Each recipes which each have a name, time, and ingredients.
const recipeList = [
  {
    name: "Spaghetti",
    cookingTime: 30,
    ingredients: ["spaghetti", "tomato", "sauce", "garlic"],
  },
  {
    name: "Salad",
    cookingTime: 10,
    ingredients: ["lettuce", "tomato", "cucumber", "olive oil"],
  },
  {
    name: "Pancakes",
    cookingTime: 20,
    ingredients: ["flour", "milk", "eggs", "sugar"],
  },
];

// 2. Write a method to find the fastest recipe based on the cooking time.
function findTheFasterRecipe(recipes) {
  const fastestRecipe = [];
  let time = 9999;
  let recipeName;

  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].cookingTime < time) {
      time = recipes[i].cookingTime;
      recipeName = recipes[i].name;
    }
  }
  fastestRecipe.push(recipeName);
  return fastestRecipe;
}
// console.log(findTheFasterRecipe(recipeList)); // Uncomment to test

// 3. Write another method to find all recipes that contain specific ingredients.
const ingredientsArray = ["lettuce", "flour", "potatoes", "sugar", "corn", "tomato"];

function findSpecificIngredients(ingredients) {
  for (let i = 0; i < recipeList.length; i++) {
    ingredients.some((item) => {
      if (recipeList[i].ingredients.includes(item)) {
        console.log(recipeList[i]);
        return true; // Stops iteration after the first match
      }
    });
  }
  // The function will iterate through the recipeList array. The some() method will check if at least one item from the ingredientsArray is included in the ingredients of each object in the recipeList. If it returns true, it will print the whole object.
}
//findSpecificIngredients(ingredientsArray); // Uncomment to test

// 1.6 Review Amazon's code
let shippingItems = [
  // Change this variable name for readability
  { item: "Apple", price: 1.5, inStock: true },
  { item: "Laptop", price: 999.99, inStock: true },
  { item: "T-shirt", price: 15, inStock: false },
  { item: "Bananas", price: 2, inStock: true },
  { item: "Headphones", price: 25, inStock: true },
];

// 1. Describe in your own words to a team mate or mentor what this code does

// The function iterates through an array of objects and checks if the price of each item is lower than 30 and the item is in stock. If it passes these conditions, it will check if the price is lower than 20. If it is, it will push the item into the result array. If the length of the array is equal to 0 (empty), it will return the empty array; if not, it will return the array with the items.
function filterItems(list) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].price < 30 && list[i].inStock) {
      if (list[i].price < 20) {
        let item = list[i].item;
        result.push(item);
      }
    }
  }
  if (result.length === 0) {
    return [];
  }

  return result;
}

// console.log(filterItems(shippingItems)); // Uncomment to test
// Expected Output: ["Apple", "Bananas"]

// 1.7 Implement Graceful Error Handling

// 1. Learn how errors work in Javascript and explain it to a classmate and a mentor.
// - Custom errors can be created using: throw new Error("Custom error").
// - Detecting, responding e preventing errors.
// - No handling errors may cause the program to crash.
// - Better for organizing and debugging code.

// 2. Basic error handling

// 1. Create a function that divides two numbers.
function divide(a, b) {
  if (b === 0) {
    throw new Error("You can't divide by zero");
  }
  return a / b;
}
// console.log(divide(10, 2)); // 5 // Uncomment to test
// console.log(divide(5, 0)); // Error: You can't divide by zero // Uncomment to test

// 3. Handling Multiple Errors

// 1. Use a try...catch block to handle errors that occurs.
function logOnlySmallNumbers(number) {
  try {
    if (number >= 100) {
      throw new Error("The number is higher than 100");
    }
    console.log(number);
  } catch (error) {
    console.error(error.message);
  }
}

//logOnlySmallNumbers(10); // Uncomment to test

function logSmallNumbers(numbers) {
  // Iterates over each element of the numbers array and executes the try...catch block to check for errors when executing logOnlySmallNumbers().
  for (const number of numbers) {
    try {
      logOnlySmallNumbers(number);
    } catch (error) {
      console.error(error.message);
    }
  }
}

//logSmallNumbers([40, 150, 9999, 20, -10, 3000]); // Uncomment to test

// 1.8 Implement a Shopping Cart

// 1. Create a Visitor Object

const visitor = {
  name: "Mateus",
  age: 36,
  height: 179,
  hasPass: true,
};

// 2. Calculate Ticket Price
function calculateTicketPrice(visitor) {
  let price = 0;
  const hasSeasonPass = visitor.hasPass;

  for (let i = 0; i < 1; i++) {
    if (hasSeasonPass) {
      price = 0;
    } else if (visitor.age < 10) {
      price = 10;
    } else if (visitor.age >= 12 && visitor.age <= 17) {
      price = 15;
    } else if (visitor.age >= 18) {
      price = 20;
    } else {
      price = 10;
    }
  }
  return price;
}

// 3. Ride Eligibility Check
function canRide(visitor, minHeight) {
  if (visitor.height >= minHeight) {
    return true;
  } else {
    return false;
  }
}

//4. Group Visitors & Total Revenue
const visitors = [
  {
    name: "Mateus",
    age: 36,
    height: 179,
    hasPass: true,
  },
  {
    name: "Marcos",
    age: 40,
    height: 184,
    hasPass: true,
  },
  {
    name: "Marcelo",
    age: 44,
    height: 180,
    hasPass: false,
  },
  {
    name: "Patrick",
    age: 33,
    height: 181,
    hasPass: false,
  },
  {
    name: "Robson",
    age: 36,
    height: 170,
    hasPass: true,
  },
];

function calculateTotalRevenue(visitors) {
  let ticketSales = 0;

  for (let i = 0; i < visitors.length; i++) {
    ticketSales += calculateTicketPrice(visitors[i]);
  }
return `The total ticket sales are: $${ticketSales.toFixed(2)}`;
}
// console.log(calculateTotalRevenue(visitors)); // Uncomment to test

// 5. Display Visitor Details
function displayVisitorInfo(visitor) {
  console.log(
    `Name: ${visitor.name} | Age: ${visitor.age} | Height: ${
      visitor.height
    }cm | Ticket Price: $${calculateTicketPrice(visitor)}`
  );
}
// displayVisitorInfo(visitors[3]); // Uncomment to test 
// // Output: Name: Patrick | Age: 33 | Height: 181cm | Ticket Price: $20