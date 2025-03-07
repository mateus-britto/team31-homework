// 1.2. Find and count the Danish letters
const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";

function findDanishLetters(string) {
  let result = { total: 0 };
  const danishLetters = ["æ", "ø", "å"];

// Needed AI support on this one. I was not able to return the object in the same format as the exercise showed. Instead, I was returning this: {total: 4, æ: 0, ø: 0, å: 1}
  for (let char of string.toLowerCase()) {
    if (danishLetters.includes(char)) {
      result.total += 1;
      if (result[char]) {
        result[char] += 1; // If the property exists, add 1
      } else {
        result[char] = 1; // If it does not exist, create it and set it to 1
      }
    }
  }

  return result;
}

// console.log(findDanishLetters(danishString)); // returns {total: 1, å: 1}
// console.log(findDanishLetters(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}
