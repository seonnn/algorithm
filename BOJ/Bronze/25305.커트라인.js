let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let [N, k] = input[0].split(" ").map(Number);
let score = input[1].split(" ").map(Number);

score.sort((a, b) => b - a);
console.log(score[k - 1]);
