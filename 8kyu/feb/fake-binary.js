const fakeBin = x =>
  x
    .split("")
    .map(num => (Number(num) >= 5 ? 1 : 0))
    .join("");
