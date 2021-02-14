// Long
// function greet(name) {
//   if (name === "Johnny") {
//     return "Hello, my love!";
//   } else {
//     return "Hello, " + name + "!";
//   }
// }

// Short
const greet = name =>
  name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`;
