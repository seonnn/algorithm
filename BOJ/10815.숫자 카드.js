let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let sangGuenSet = input[1]
  .split(" ")
  .map((el) => Number(el))
  .sort((a, b) => a - b);
let compareSet = input[3].split(" ").map((el) => Number(el));
let result = [];

for (let i = 0; i < Number(input[2]); i++) {
  let start = 0;
  let end = Number(input[0]) - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (sangGuenSet[middle] === compareSet[i]) {
      result.push(1);
      break;
    }
    if (sangGuenSet[middle] < compareSet[i]) start = middle + 1;
    else end = middle - 1;

    if (start > end) result.push(0);
  }
}

console.log(result.join(" "));
