// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/solutions/javascript

function maps(arr) {
  let doubled = [];
  for (let i = 0; i < arr.length; i++) {
    doubled.push(arr[i] * 2);
  }
  return doubled;
}
