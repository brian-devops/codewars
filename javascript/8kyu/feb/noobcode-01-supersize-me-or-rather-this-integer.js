function superSize(num) {
  let newNum = num
    // Convert from int to str
    .toString()
    // Split each char
    .split("")
    // Sort in descending order with a ternary
    .sort(function(a, b) {
      return a > b ? -1 : 1;
    })
    // Join it back together at each char
    .join("");
  // Return it as an int
  return Number(newNum);
}
