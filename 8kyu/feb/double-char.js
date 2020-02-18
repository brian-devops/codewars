function doubleChar(str) {
  return str
    .split("")
    .map(function(a) {
      return a + a;
    })
    .join("");
}
