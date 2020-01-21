//Sum each array individually then sum the 2 arrays together - https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

function arrayPlusArray(arr1, arr2) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return arr1.reduce(reducer) + arr2.reduce(reducer);
}
