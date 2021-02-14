const isUpperCase = char => char === char.toUpperCase();

String.prototype.toAlternatingCase = function() {
  return this.split("")
    .map(char => (isUpperCase(char) ? char.toLowerCase() : char.toUpperCase()))
    .join("");
};
