//Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

// Long version
// function even_or_odd(number) {
//   if (number % 2 == 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

//Short version using conditional ternary
const even_or_odd = number => (number % 2 == 0 ? "Even" : "Odd");
