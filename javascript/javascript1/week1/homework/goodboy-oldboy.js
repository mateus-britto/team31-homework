// Goodboy-Oldboy (A dog age calculator)

let dogYearOfBirth = 2020;
let dogYearFuture = 2030;
let dogYear = dogYearFuture - dogYearOfBirth;

let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
  dogYear *= 9;
  console.log("Your dog will be " + dogYear + " dog years old in " + dogYearOfBirth + ".");
} else {
  console.log("Your dog will be " + dogYear + " human years in " + dogYearOfBirth + ".");
}
