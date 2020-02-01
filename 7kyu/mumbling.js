/* - Mumbling - https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  //create placeholder, convert inputs to lowercase and split on each letter
  let letters = s.toLowerCase().split("");
  //iterate over the inputs until the last input
  for (let i = 0; i < letters.length; i++) {
    //convert inputs back to upper case and repeat input * the position of the input
    letters[i] = letters[i].toUpperCase() + letters[i].repeat(i);
  }
  //join the inputs back up and split each octet with a hyphen
  return letters.join("-");
}
