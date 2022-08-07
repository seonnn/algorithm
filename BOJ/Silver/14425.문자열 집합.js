let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let [N, M] = input[0].split(" ").map((el) => +el);
let sample = new Set(input.slice(1, N + 1));
let arr = input.slice(N + 1);
let res = 0;

for (let i = 0; i < arr.length; i++) {
  if (sample.has(arr[i])) res += 1;
}

console.log(res);
