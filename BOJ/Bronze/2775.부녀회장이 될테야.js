let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((str) => +str);

let inputNum = input[0];

for (i = 0; i < inputNum; i++) {
  let k = input[2 * i + 1];
  let n = input[2 * i + 2];
  let result = 1;

  for (let j = 0; j <= k; j++) {
    result *= k + n - j;
  }
  for (let j = k + 1; j >= 1; j--) {
    result /= j;
  }

  console.log(result);
}
