/* https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript

Task:
Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ().
*/

function expressionMatter(a, b, c) {
  return Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c));
}
