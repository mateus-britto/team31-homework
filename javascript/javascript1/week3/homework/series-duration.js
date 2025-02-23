// Exercise 2: Series duration of my life

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function logOutSeriesText(years) {
  const lifespan = years * 365.25 * 24; // Total hours in the given lifespan.

  let totalPercentage = 0;
  for (let i = 0; i < seriesDurations.length; i++) {
    // Calculate the total time spent on each series in hours.
    const totalTime =
      seriesDurations[i].days * 24 + seriesDurations[i].hours + seriesDurations[i].minutes / 60;
    // Calculate the percentage of the lifespan spent on each series.
    let percentageSpent = (totalTime / lifespan) * 100;

    // Log the percentage of the lifespan spent on each series.
    console.log(`${seriesDurations[i].title} took ${percentageSpent.toFixed(3)} of my life.`);

    // Calculate the total percentage of the lifespan spent on all series.
    totalPercentage += percentageSpent;
  }
  // Log the total percentage of the lifespan spent on all series.
  console.log(`In total that is ${totalPercentage} of my life.`);
}

logOutSeriesText(80);
