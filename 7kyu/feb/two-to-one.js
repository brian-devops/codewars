function longest(s1, s2) {
  // Create a new array spreading the 2 input strings. using new Set to remove duplicated items
  let result = [...new Set([...s1, ...s2])];
  // Return to de-duplicated array and sort it alphabetically before joining it back together
  return result.sort().join("");
}
