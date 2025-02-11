// Exercise 1 - Flight booking fullname function.
function getFullname(firstName, surName, useFormalName, sex) {
  if (firstName === "" || surName === "") {
    return "Please enter your first name and surname.";
  }

  if (useFormalName && sex.toLowerCase() === "male") {
    // Use the toLowerCase() method to ensure the input is in lowercase. 
    return "Lord " + firstName + " " + surName;
  } else if (useFormalName && sex.toLowerCase() === "female") {
    return "Lady " + firstName + " " + surName;
  } else {
    return firstName + " " + surName;
  }
}

// Create two variables and call the function using them.
const fullname1 = getFullname("Benjamin", "Hughes");
const fullname2 = getFullname("Benjamin", "Hughes");

// Log the output
/* console.log(fullname1);
console.log(fullname2); */

// Test the function with different values and the additional parameter.
console.log(getFullname("Benjamin", "Hughes", true, "MALE"));
console.log(getFullname("Ana", "Hughes", true, "female"));
console.log(getFullname("Benjamin", "Hughes", false));
console.log(getFullname("", "")); //Test with empty values
