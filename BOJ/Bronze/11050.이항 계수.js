let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((el) => +el);
let [N, K] = input;
let result = 1;

for (let i = 0; i < K; i++) {
  result *= N - i;
}

for (let i = 1; i <= K; i++) {
  result /= i;
}

console.log(result);
