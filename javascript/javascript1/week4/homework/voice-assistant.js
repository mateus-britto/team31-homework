// Exercise 1 - Voice Assistant

let name;
const todoList = [];

function getReply(command) {
  const commandArray = command.split(" "); // Convert the command to an array.

  if (command.startsWith("Hello my name is")) {
    // determines whether this string begins with the specified characters (returns true or false)
    if (name) {
      console.log("You already told me your name");
      return;
    }
    name = commandArray[commandArray.length - 1];
    console.log(`Nice to meet you, ${name}`);
  } else if (command === "What is my name") {
    if (name) {
      console.log(`Your name is ${name}`);
    } else {
      console.log("I don't know your name yet");
    }
  } else if (command === "Add fishing to my todo") {
    todoList.push("fishing");
    console.log("Fishing added to your todo list");
  } else if (command === "Add singing in the shower to my todo") {
    todoList.push("singing in the shower");
    console.log("Singing in the shower added to your todo list");
  } else if (command === "Remove fishing from my todo") {
    const index = todoList.indexOf("fishing");
    if (index !== -1) {
      todoList.splice(index, 1);
      console.log("Fishing removed from your todo list");
    }
  } else if (command === "What is on my todo?") {
    console.log(
      `You have ${todoList.length} todo${todoList.length > 1 ? "s" : ""} - ${todoList.join(", ")}`
    );
  } else if (command === "What day is it today?") {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    console.log(`${day}. of ${monthNames[month]} ${year}`);
    // I had to ask AI to implement the check below as i had no idea how to do it.
  } else if (command.startsWith("What is")) {
    const operation = command.replace("What is", "").trim();
    // Replaces the "what is" with an empty string, use trim() to remove white spaces from the beginning and end and store the remaining string in operation.
    try {
      const result = eval(operation); // Evaluates JS code represented as a string.
      console.log(`The result is ${result}`);
    } catch (error) {
      console.log("Sorry, I can't perform that calculation.");
    }
    // I still don't feel 100% confident using the try...catch statement. I will have to practice more. I also have security concerns about using the eval() function. But since this is homework, I will leave it as it is.
  } else if (command === "Set a timer for 4 minutes") {
    // Executes a command after the specified interval has passed.
    setTimeout(() => {
      console.log("Timer done");
    }, 3000); // This parameter is the time interval in milliseconds (set to 3000 to make it easier to test).
  }
}

// Could not get te function to work in CodeSandbox.

getReply("Hello my name is Benjamin");
getReply("Hello my name is Benjamin"); // Repeated command for testing
getReply("What is my name");
getReply("Add fishing to my todo");
getReply("Add singing in the shower to my todo");
getReply("Remove fishing from my todo");
getReply("What is on my todo?");
getReply("What day is it today?");
getReply("What is 4 * 12");
getReply("What is 5 * 20");
getReply("Set a timer for 4 minutes");
