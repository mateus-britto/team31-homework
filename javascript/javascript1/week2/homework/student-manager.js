// Exercise 4 - Student manager

const class07Students = [];

// Function to add students to the class.
function addStudentToClass(studentName) {
  if (studentName === "") {
    return "Student name cannot be empty.";
  }

  for (let i = 0; i < class07Students.length; i++) {
    if (class07Students[i] === studentName) {
      // Iterate through the array to find students with the same name.
      return "Student " + studentName + " is already in the class.";
    }
  }

  if (class07Students.length < 6 || studentName === "Queen of Denmark") {
    // Add the Queen even at full capacity.
    class07Students.push(studentName);
  } else if (class07Students.length < 6) {
    class07Students.push(studentName);
  } else {
    return "Cannot add more students to class 07.";
  }

  return class07Students;
}

// Function to return the number of students in Class 07.
function getNumberOfStudents() {
  return "Class 07 has " + class07Students.length + " students.";
}

// Testing all possible scenarios.
console.log(addStudentToClass(""));
console.log(addStudentToClass("Aragorn"));
console.log(addStudentToClass("Legolas"));
console.log(addStudentToClass("Gimli"));
console.log(addStudentToClass("Frodo"));
console.log(addStudentToClass("Sam"));
console.log(addStudentToClass("Pippin"));
console.log(addStudentToClass("Queen of Denmark"));
console.log(getNumberOfStudents());
