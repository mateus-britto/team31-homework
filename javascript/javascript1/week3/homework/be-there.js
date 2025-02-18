// Exercise 1: When will we be there??

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = function (travelInformation) {
  let travelSpeed = travelInformation.speed; // Speed in km/h.
  let distance = travelInformation.destinationDistance; // Distance in km.

  // Calculate travel time in hours
  let travelTimeInHours = distance / travelSpeed;

  // Extract hours and minutes
  let hours = Math.floor(travelTimeInHours);
  let minutes = Math.round((travelTimeInHours - hours) * 60);

  return `${hours} hours and ${minutes} minutes`;
};

console.log(travelTime(travelInformation)); // 8 hours and 38 minutes
