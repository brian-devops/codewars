//Beginner Series #2 Clock - https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/solutions/javascript

function past(h, m, s) {
  //#Happy Coding! ^_^

  let hrToMs = Math.floor(h * 60 * 60 * 1000);
  let minToMs = Math.floor(m * 60 * 1000);
  let secToMs = Math.floor(s * 1000);

  let ms = hrToMs + minToMs + secToMs;

  return ms;
}
