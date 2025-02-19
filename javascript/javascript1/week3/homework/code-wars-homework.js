// Codewars Homework - solutions

// Exercise 1 - job Matching #1

// Uncomment the variables bellow to test the first exercise.
/* 
let candidate = {
  minSalary: 120000,
};

let job = {
  maxSalary: 140000,
};
 */
function match(candidate, job) {
  const salaryWiggleRoom = candidate.minSalary * 0.1;

  if (!candidate.minSalary || !job.maxSalary) {
    throw new Error("Salary information is missing");
    // It took me a while because I did not know that you could throw an error; I was just returning "Error".
  }

  if (candidate.minSalary - salaryWiggleRoom <= job.maxSalary) {
    return true;
  } else {
    return false;
  }
}

//console.log(match(candidate, job)); Uncomment this line to test

// Exercise 2 - Job Matching #2

let candidates = [
  {
    desiresEquity: true,
    currentLocation: "New York",
    desiredLocations: ["San Francisco", "Los Angeles", "Colorado"],
  },
  {
    desiresEquity: false,
    currentLocation: "San Francisco",
    desiredLocations: ["Kentucky", "New Mexico"],
  },
  {
    desiresEquity: true,
    currentLocation: "Los Angeles",
    desiredLocations: ["New York", "Kentucky"],
  },
  {
    desiresEquity: true,
    currentLocation: "Austin",
    desiredLocations: ["Boston", "Orlando"],
  },
];

let job = {
  equityMax: 1.2,
  locations: ["New York", "Kentucky"],
};

function match(job, candidates) {
  return candidates.filter((candidate) => {
    // Check equity match
    if (candidate.desiresEquity && job.equityMax === 0) {
      return false; // Excludes the candidate fro the results.
    }

    // Using the some() method we'll check if at least one element passes the condition. If the job location equals the candidates current location or the candidates desired location include (includes()) the job location.
    const locationMatch = job.locations.some((location) => {
      // If true the locations match.
      return (
        location === candidate.currentLocation || candidate.desiredLocations.includes(location)
      );
    });
    return locationMatch; // If true includes the candidate in the filtered results.
  });
}

//console.log(match(job, candidates)); // I couldn't have done this one without AI...

// Exercise 3 - Unfinished Loop - Bug Fixing #1

function createArray(number) {
  const newArray = [];
  for (let counter = 1; counter <= number; ) {
    newArray.push(counter);
    counter++; // Just add this part and the loop works.
  }
  return newArray;
}

console.log(createArray(10)); // Uncomment to test
