// Convert number to reversed array of digits - https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

function digitize(num) {
  //code here
  let arr = Array.from(String(num), Number);
  return arr.reverse();
}
