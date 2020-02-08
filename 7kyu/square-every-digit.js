const squareDigits = num => {
  // Convert num to a string and split on each char
  const digits = num.toString().split("");
  // Map over each number and square it
  const squaredDigits = digits.map(n => n * n);
  // Join each char back together
  const squaredNumber = squaredDigits.join("");

  return +squaredNumber;
};
