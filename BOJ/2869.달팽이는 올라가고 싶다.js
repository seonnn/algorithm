let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let A = Number(input[0]);
let B = Number(input[1]);
let Z = Number(input[2]);
let day = 0;

day = Math.ceil((Z - B) / (A - B));

console.log(day);
