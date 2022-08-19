let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el);

let result = input.slice(1).sort((a, b) => a - b);
console.log(result.join("\n"));
