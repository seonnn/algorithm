let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map((el) => +el);

input.sort((a, b) => b - a);

console.log(Number(input.join("")));
