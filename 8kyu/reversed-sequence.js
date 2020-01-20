// Get the number n (n>0) to return the reversed sequence from n to 1.
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

function reverseSeq(n) {
  const arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
}
