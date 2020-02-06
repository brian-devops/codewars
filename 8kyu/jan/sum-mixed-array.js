//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

//Return your answer as a number.

//https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

function sumMix(x) {
  //Convert the string value to integers
  x = x.map(i => Number(i));

  //Sum each number in the array
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return x.reduce(reducer);
}
