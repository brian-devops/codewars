function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let classTotal = classPoints.reduce(reducer);
  let classAvg = classTotal / classPoints.length;

  return yourPoints > classAvg ? true : false;
}
