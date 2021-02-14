//square numbers in array then sum

const squareSum = numbers =>
  numbers.map(num => Math.pow(num, 2)).reduce((a, b) => a + b, 0);
