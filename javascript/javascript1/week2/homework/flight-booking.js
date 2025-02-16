// Exercise 1 - Flight booking fullname function.
function getFullname(firstName, surName, useFormalName, sex) {
  if (!firstName || !surName) {
    return "Please enter your first name and surname.";
  }

  const formattedSex = sex ? sex.toLowerCase() : "";
  // Implement a default value for the sex parameter using a ternary operator.

  if (useFormalName) {
    // Check if useFormalName is true beforehand.
    if (formattedSex === "male") {
      return "Lord " + firstName + " " + surName;
    } else if (formattedSex === "female") {
      return "Lady " + firstName + " " + surName;
    }
  }

  return firstName + " " + surName;
}

// Create two variables and call the function using them.
const fullname1 = getFullname("Benjamin", "Hughes");
const fullname2 = getFullname("Benjamin", "Hughes");

// Log the output
/* 
console.log(fullname1);
console.log(fullname2); 
*/

// Test the function with different values and the additional parameter.
console.log(getFullname("Benjamin", "Hughes", true, "MALE"));
console.log(getFullname("Ana", "Hughes", true, "female"));
console.log(getFullname("Benjamin", "Hughes", false));
console.log(getFullname("Benjamin", "Hughes", true));
console.log(getFullname("", "")); //Test with empty values
