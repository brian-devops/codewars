/* - https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)
*/

// function sumArray(array) {
//   let min = Math.min(...array);
//   let max = Math.max(...array);

//   if (array === null) {
//     return 0;
//   }

//   for (var i = 0, count = 0; i <= array.length; i++) {
//     if (array[i] > min && array[i] < max) {
//       count += array[i];
//     }
//   }
//   return count;
// }
function sumArray(array) {
  if (!Array.isArray(array)) return 0;

  return array
    .sort((a, b) => a - b)
    .slice(1, array.length - 1)
    .reduce((a, b) => a + b, 0);
}
