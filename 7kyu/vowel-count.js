// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  //placeholder for the count
  let vowelsCount = 0;
  //regex to match the vowels and /g to search the whole string for all matches and not just the first find
  const regEx = str.match(/[aeiou]/g);
  // return with Error if null or the count otherwise
  return vowelsCount === null ? "Error" : regEx.length;
}
