// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2020;
const dogYearFuture = 2030;
let dogYear = dogYearFuture - dogYearOfBirth;

const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
  dogYear *= 7;
  console.log("Your dog will be " + dogYear + " dog years old in " + dogYearOfBirth + ".");
} else {
  console.log("Your dog will be " + dogYear + " human years in " + dogYearOfBirth + ".");
}
