// 2.1 Implement a Calendar

// 1.
// - To get the full date use the object without parameters: new Date().
// - To get specific dates pass parameters to the object: new Date(1992, 1, 16).
// - You can get days, months, years, hours, minutes, seconds, add and subtract days and etc...

// 2. After spending much time, I had to surrender to AI on this one.
// The Date object can parse strings in specific formats ("YYYY-MM-DD", "YYYY-MM-DDTHH:MM:SSZ", "MM/DD/YYYY", "Month DD, YYYY", etc.).
function daysUntilBirthday(birthdayString) {
  const birthday = new Date(birthdayString);
  const today = new Date();
  const nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
  // Get the current year from today and the month and day from the birthday.

  if (today > nextBirthday) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const diffTime = nextBirthday - today;
  // Since the result of diffTime is in milliseconds, I had to convert the milliseconds to days (1000 * 60 * 60 * 24).
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return `There are ${diffDays} days until your next birthday.`;
}

// console.log(daysUntilBirthday("1995-06-15")); // Uncomment to test.

// 3.
function ageOnDate(birthdayString, dateString) {
  const date = new Date(dateString);
  const birthday = new Date(birthdayString);

  let age = date.getFullYear() - birthday.getFullYear();
  const monthDiff = date.getMonth() - birthday.getMonth();
  const dayDiff = date.getDate() - birthday.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }
  // If monthDiff is less than 0, the birthday has not occurred this year.
  // If monthDiff is 0 but dayDiff is less than 0, the birthday has not occurred this month.
  // In either case, the age is decremented by 1.
  return age;
}

// console.log(ageOnDate("1995-06-15", "2025-06-15")) // Uncomment to test.

// 4.
function daysBetweenDates(date1, date2) {
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  const diffTime = Math.abs(secondDate - firstDate); // Returns a positive number regardless of the order of the dates.
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Converts milliseconds to days.

  return diffDays;
}

// console.log(daysBetweenDates("2023-01-01", "2023-12-31")); // Uncomment to test.

//  2.2 Review NASA's Code
function getTicketPrice(age, isVIP) {
  return isVIP ? 0 : age < 12 ? 50 : age >= 12 && age < 18 ? 75 : 100;
  // I personally wouldn't use a ternary here because I find it harder to read than an if statement.

  /*  let price;

  if (isVIP) {
    price = 0;
  } else {
    if (age < 12) {
      price = 50;
    } else {
      if (age >= 12 && age < 18) {
        price = 75;
      } else {
        price = 100;
      }
    }
  }
  return price; */
}

function canTravel(height, age) {
  return height >= 140 ? (age >= 10 ? true : false) : false; // or // return height >= 140 && age >= 10;
  // Wouldn't use here either. For be both versions ar harder to read than an if statement.

  /* 
  if (height >= 140) {
    if (age >= 10) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  } 
  */
}

function printPassengerInfo(name, age, height, isVIP) {
  let ticketPrice = getTicketPrice(age, isVIP);
  let travelStatus = canTravel(height, age)
    ? "Approved for launch"
    : "Not eligible for space travel";

  /* console.log(
    name +
      " | Age: " +
      age +
      " | Height: " +
      height +
      "cm | Ticket Price: $" +
      ticketPrice +
      " | Travel Status: " +
      travelStatus
  ); */

  // Implement Template literals.
  console.log(
    `${name} | ${age} | Height: ${height} | Ticket Price: ${ticketPrice} | Travel status: ${travelStatus}`
  );
}

// Uncomment the code bellow to test.
/* 
printPassengerInfo("John", 25, 180, false);
printPassengerInfo("Jane", 10, 130, false);
printPassengerInfo("Bob", 16, 155, true);
printPassengerInfo("Alice", 8, 120, false);
printPassengerInfo("David", 12, 140, false);
printPassengerInfo("Eve", 18, 160, false);
printPassengerInfo("Frank", 11, 145, false);
printPassengerInfo("Grace", 14, 135, false);
printPassengerInfo("Henry", 9, 125, false);
printPassengerInfo("Isabel", 13, 150, false);
printPassengerInfo("Kevin", 17, 170, false);
printPassengerInfo("Lucy", 7, 110, false);
printPassengerInfo("Michael", 15, 165, false);
printPassengerInfo("Nancy", 19, 175, false);
printPassengerInfo("Oliver", 6, 105, false);
printPassengerInfo("Patricia", 20, 185, false);
printPassengerInfo("Quinn", 5, 100, false);
printPassengerInfo("Robert", 21, 190, false);
 */

// 3. 2.3 Implement a Almost-Math tool
// 1.
function sumEvenNumbers(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
  }
  // console.log(sum); // Uncomment to test.
}

sumEvenNumbers([1, 2, 3, 4, 5, 6]); // Expected output: 12 (because 2 + 4 + 6 = 12)
sumEvenNumbers([10, 15, 20, 25]); // Expected output: 30 (because 10 + 20 = 30)

// 2.
function secondLargest(array) {
  let newArray = array.filter((num) => num !== Math.max(...array));
  // Create a new array without the largest number of the original array.

  if (array.length < 2) {
    return null;
  } else if (array.every((value) => value === array[0])) {
    // I every other item in the array is equal to the first return null.
    return null;
  } else {
    return Math.max(...newArray);
    // Return the largest number of the new array.
  }
}

// Uncomment the code bellow to test.
/* 
console.log(secondLargest([10, 20, 4, 45, 99])); // 45
console.log(secondLargest([3, 3, 3])); // null
console.log(secondLargest([5])); // null
console.log(secondLargest([])); // null
 */

// 3.
// This function takes the odd numbers from the numbers array
// pushes them into oddNumbers and increment the counter by 1 each time this happens
// sums the odd numbers inside oddNumbers
// returns the average of the of the numbers in the oddNumbers array
function doStuff(numbers) {
  const oddNumbers = [];
  let sum = 0;
  let count = 0;
  for (let number of numbers) {
    if (number % 2 !== 0) {
      oddNumbers.push(number);
      count = count + 1;
    }
    // sum = 0; this is a bug
  }
  for (let number of oddNumbers) {
    sum += number;
  }

  // Implement a check in case there ar no odd numbers (This solves the NaN bug)
  if (oddNumbers.length === 0) {
    return "There are no odd numbers in the array";
  }

  return sum / count;
}

let numbers = [-3, 1, 8, 5, 7, 14, 98, 15];
// console.log(doStuff(numbers)); // Output: 5 // Uncomment to test

numbers = [2, 4, 8, 5, 7];
// console.log(doStuff(numbers)); // Output: 6 // Uncomment to test

numbers.pop(); // Removes the last item from an array. Result: [ 2, 4, 8, 5 ]
numbers.unshift(1); // Adds the specified elements to the beginning of an array. Result: [ 1, 2, 4, 8, 5 ]
numbers.pop(); // Removes the last item from an array. Result: [ 1, 2, 4, 8 ]
numbers.push(8); // Adds the specified elements to the end of an array. Result: [ 1, 2, 4, 8, 8 ]
numbers.unshift(2); // Adds the specified elements to the beginning of an array. Result: [ 2, 1, 2, 4, 8, 8 ]
numbers[0] += 3; // Adds 3 to the first element of the array. Result: [ 5, 1, 2, 4, 8, 8 ]
numbers[2] *= 3; // Multiplies the third element of the array by 3. Result: [ 5, 1, 6, 4, 8, 8 ]
// console.log(doStuff([2, 4, 6])); // Nan??? (corrected by implementing an extra check in the function) // Uncomment to test

// 4.
function isPrime(number) {
  if (number < 1 || number > 100) {
    throw new Error("Number must be between 1 and 100");
  }

  // Had to ask AI how to check for primes in JS.
  if (number === 1) return false; // This is as far as i could come.
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}
// Uncomment the code bellow to test it.
/* 
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
 */

// 5.
// This one was difficult...
function factorial(number) {
  let result = 1;

  for (let i = 2; i <= number; i++) {
    result = result * i;
    // Each time the number multiplies the value of "i" increases until it reaches the value of number.
  }
  return result;
}

// console.log(factorial(5)); // 120 // Uncomment to test
// console.log(factorial(7)); // 5040 // Uncomment to test