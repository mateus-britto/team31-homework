// Exercise 2 - Event application.

function getEventWeekday(daysFromToday) {
  const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const today = new Date().getDay(); // Returns the day of the week (0-6).
  const eventDay = (today + daysFromToday) % 7; // Uses the modulo operator to get the remainder of the division by 7 and get the event day.

  return `The event is on ${weekday[eventDay]}`; // Uses the eventDay as index to get the weekday.
}

console.log(getEventWeekday(15));
