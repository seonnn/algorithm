let input = require("fs").readFileSync("/dev/stdin").toString().trim();
input = input.split("\n").map((str) => str.split(" "));

let max = -1;
let idx = [0, 0];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[0].length; j++) {
    if (+input[i][j] >= max) {
      max = input[i][j];
      idx[0] = i + 1;
      idx[1] = j + 1;
    }
  }
}

console.log(max);
console.log(idx.join(" "));
