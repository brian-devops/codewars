// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// https://www.codewars.com/kata/55ecd718f46fba02e5000029/javascript

function between(a, b) {
  // your code here
  const arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}
