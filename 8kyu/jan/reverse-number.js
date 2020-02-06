//given a number show the reverse. eg 1 becomes -1 and 14 becomes -14 - https://www.codewars.com/kata/56dec885c54a926dcd001095/solutions/javascript

function opposite(number) {
  number = number - number * 2;
  return number;
}
