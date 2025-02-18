// Exercise 4: CactusIO-interactive (Smart phone usage app)

const activities = []; // Activities array.
let usageLimit = 0; // Global variable to store the usage limit.

// Getting the current date
const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1.
const year = currentDate.getFullYear();
const formattedDate = `${day}/${month}-${year.toString().slice(-2)}`;

// Function to set the time limit.
function setUsageLimit(timeLimit) {
  usageLimit = timeLimit;
}

// Set the usage limit.
setUsageLimit(180);

// Function to add activity.
function addActivity(activity, duration) {
  let date = formattedDate;

  activities.push({ date: date, activity: activity, duration: duration });
}

// Tests
addActivity("Youtube", 30);
addActivity("Netflix", 45);
addActivity("Instagram", 60);
console.log(activities);

// Function to show activities status.
function showStatus() {
  let totalActivityTime = 0;

  // Filter activities for the current date
  const todayActivities = activities.filter((activity) => activity.date === formattedDate);

  if (!todayActivities.length) {
    console.log("Add some activities before calling showStatus");
    return;
  }

  for (let i = 0; i < todayActivities.length; i++) {
    totalActivityTime += todayActivities[i].duration;
  }

  if (totalActivityTime > usageLimit) {
    console.log("You have reached your limit, no more smartphoning for you!");
    return;
  }

  console.log(
    `On ${formattedDate} You have added ${todayActivities.length} activit${
      todayActivities.length > 1 ? "ies" : "y"
    }, amounting to ${totalActivityTime} minutes of usage.`
  );
  return totalActivityTime;
}

showStatus();

// Function to calculate the activity a user has spent the most time on.
function calculateLongestActivity() {
  // Check if there are activities.
  if (activities.length === 0) {
    console.log("No activities to calculate.");
    return;
  }

  let longestActivityTime = 0;
  let longestActivity;

  for (let i = 0; i < activities.length; i++) {
    if (activities[i].duration > longestActivityTime) {
      longestActivityTime = activities[i].duration;
      longestActivity = activities[i].activity;
    }
  }
  console.log(`The activity you spent the most time in is: ${longestActivity}.`);
}

calculateLongestActivity();
