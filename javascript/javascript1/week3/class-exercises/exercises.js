const user = {
  name: "Emil",
  age: 25,
  role: "Teacher",
  classes: ["Javascript 1", "Javascript 2"],
  hobbies: {
    favorite: "computers",
    sports: "running to class",
  },
};

console.log(user.classes[1]);
console.log(user.hobbies);
console.log(user.hobbies.favorite);
console.log(user.hobbies.sports);

// Add a new property 'pets' to the user object with an array of pet types
user.pets = ["dog", "cat"];
console.log(user); // Log the updated user object to the console

// Update the 'pets' property to be an object with pet types as keys and their names as values
user.pets = { dog: "loro", cat: "ziu" };
console.log(user); // Log the updated user object to the console

// Access and log the name of the dog from the 'pets' property
console.log(user.pets.dog); // Output: "loro"

// Delete the 'pets' property from the user object
delete user.pets;
console.log(user); // Log the updated user object to the console, which no longer includes the 'pets' property

// Redefine the 'favorite' property of the 'hobbies' object using Object.defineProperty
Object.defineProperty(user.hobbies, "favorite", {
  value: "gaming",
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(user);

// Redefine the 'favorite' property and add a new 'exercise' property to the 'hobbies' object using Object.defineProperties
Object.defineProperties(user.hobbies, {
  favorite: { value: "gaming", writable: true, enumerable: true, configurable: true },
  exercise: { value: "training", writable: true, enumerable: true, configurable: true },
});

console.log(user); 

const user = {
  name: "Emil",
  age: 25,
  role: "Teacher",
  classes: ["Javascript 1", "Javascript 2"],
  hobbies: {
    favourite: "computers",
    sports: "running to class",
  },
};

// Function to add a class to the student's graduated classes
function graduatedClass(student, className) {
    // Check if the student has already graduated from the class
    if (student.classes.includes(className)) {
        console.error("Error: Class already graduated");
        return;
    }

    // Add the class to the student's graduated classes
    student.classes.push(className);
}

console.log(user); // Log the initial user object to the console
graduatedClass(user, "HTML"); // Add "HTML" to the user's graduated classes
console.log(user); // Log the updated user object to the console
graduatedClass(user, "HTML"); // Attempt to add "HTML" again, which should trigger an error

const newUser = {
  name: "",
  age: "",
};

var students = [];

function addStudent(student) {
  if (student.name === null || typeof student.name !== "string") return "Error";
  if (student.age === null) return "Error";

  students.push(student);
}

addStudent({ name: "Rahim" });
console.log(students);

const students = [
  { name: "Fowad", age: 32 },
  { name: "Emil", age: 25, teacher: true },
  { name: "Zoey", age: 28 },
];

for (let i = 0; i < students.length; i++) {
  const currentStudent = students[i];
  console.log(typeof currentStudent);
  console.log(currentStudent.name);
}

students.push({ name: "Ahmad", age: 27 });

console.log(students);
delete students[3].name;
delete students[3].age;
console.log(students);


/* 
You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.
*/

var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]

 const array = [
  ["white", "goodness"],
  ["blue", "tranquility"],
  ["black", "sorrow"],
];

function colorAssociation(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const color = array[i][0];
    const adjective = array[i][1];

    newArray.push({ [color]: adjective });
  }
  console.log(newArray);
}

colorAssociation(array); 

function correctTail(body, tail) {
  let sub = body.substr(body.length - tail.length);

  if ((sub === tail)) {
    return true;
  } else {
    return false;
  }

  console.log(sub)
}
console.log(correctTail("Fox", "x"));
console.log(correctTail("Rhino", "o"));
console.log(correctTail("Meerkat", "t")); 

 function findLongest(str) {
  let spl = str.split(" ");
  let longest = 0;

  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }
  return longest;
}

console.log(findLongest("The quick white fox jumped around the massive dog")); 

arr = [
  {
    username: "David",
    status: "online",
    lastActivity: 100,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

const whosOnline = (friends) => {
  const friendsList = {
    online: [],
    offline: [],
    away: [],
  };

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].status === "online") {
      if (friends[i].lastActivity > 10) {
        friendsList.away.push(friends[i].username);
      } else {
        friendsList.online.push(friends[i].username);
      }
    }
    if (friends[i].status === "offline") {
      friendsList.offline.push(friends[i].username);
    }
  }
  if (!friendsList.online.length) {
    delete friendsList.online;
  }
  if (!friendsList.offline.length) {
    delete friendsList.offline;
  }
  if (!friendsList.away.length) {
    delete friendsList.away;
  }

  return friendsList;
};

console.log(whosOnline(arr));