// Exercise 3: Smart-ease - Back to the basics!

const notes = [];

// Function to save the notes
function saveNote(content, id) {
  notes.push({ content: content, id: id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// Function to get the notes
function getNote(id) {
  if (id === undefined || typeof id !== "number") {
    return "Please enter a valid id";
  }

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

// Function to logout the notes
function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with the id: ${notes[i].id}, has the following note text: ${notes[i].content}`
    );
  }
}

logOutNotesFormatted();

// Unique feature
// The function will receive an id and delete the note that has that id.
function deleteNotes(id) {
  if (id === undefined || typeof id !== "number") {
    return "Please enter a valid id";
  }

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      notes.splice(i, 1); // Delete the note in the provided index.
      console.log(`Note ${id} deleted.`);
    }
  }
  return notes;
}

console.log(deleteNotes(1))
