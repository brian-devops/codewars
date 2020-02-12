function grow(x) {
  let reducer = (accumulator, currentValue) => accumulator * currentValue;
  return x.reduce(reducer);
}
