let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input[0].split(" ").map((el) => +el);
let cards = input[1].split(" ").map((el) => +el);
let res = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      let sum = cards[i] + cards[j] + cards[k];
      if (sum <= M && sum >= res) {
        res = sum;
      }
    }
  }
}

console.log(res);
