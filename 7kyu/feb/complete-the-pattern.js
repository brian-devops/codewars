function pattern(n) {
  // Placeholder array to push values to
  let result = [];
  // The count from 1 to n
  for (i = 1; i <= n; i++) {
    // Push i + 1 to the array and join
    result.push(Array(i + 1).join(i));
  }
  // Add the new line
  return result.join("\n");
}
