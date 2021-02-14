// Sum Numbers
function sum(numbers) {
  "use strict";
  const reducer = (total, currentValue) => total + currentValue;
  return numbers.reduce(reducer, 0);
}
