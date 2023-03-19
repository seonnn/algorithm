let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((el) => +el);

let max = Math.max(...input);
let dp0 = [1, 0, 1];
let dp1 = [0, 1, 1];
let dp = [];

for (let i = 3; i <= max; i++) {
  dp0[i] = dp0[i - 1] + dp0[i - 2];
  dp1[i] = dp1[i - 1] + dp1[i - 2];
}

for (let i = 1; i <= input[0]; i++) {
  dp.push(`${dp0[input[i]]} ${dp1[input[i]]}`);
}

console.log(dp.join("\n"));
