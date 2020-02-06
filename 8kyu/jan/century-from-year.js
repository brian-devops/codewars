//Get the century from a year - https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/solutions/javascript

function century(year) {
  return Math.floor((year - 1) / 100) + 1;
}
