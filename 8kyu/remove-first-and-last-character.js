//remove the first and last char of a string -https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

// Long soloution
// function removeChar(str) {
//   //You got this!
//   return str.slice(1, str.length - 1);
// }

//Shorter soloution
const removeChar = str => str.slice(1, str.length - 1);
