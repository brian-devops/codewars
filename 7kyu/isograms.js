const isIsogram = word => {
  word = word.toLowerCase().split("");
  const result = word.reduce((accum, letter) => {
    !accum.includes(letter) && accum.push(letter);
    return accum;
  }, []);
  return result.length === word.length;
};
