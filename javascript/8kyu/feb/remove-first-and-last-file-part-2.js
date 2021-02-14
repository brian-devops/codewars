const array = arr =>
  arr
    .split(",")
    .slice(1, -1)
    .join(" ") || null;
