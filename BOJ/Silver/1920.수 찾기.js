let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let arrN = input[1]
  .split(" ")
  .map((el) => +el)
  .sort((a, b) => a - b);
let len = +input[2];
let arrM = input[3].split(" ").map((el) => +el);
let result = [];

function binarySearch(num) {
  let start = 0;
  let end = len - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (num === arrN[mid]) return 1;

    if (num > arrN[mid]) start = mid + 1;
    else end = mid - 1;

    mid = Math.floor((start + end) / 2);
  }
  return 0;
}

for (let i = 0; i < len; i++) {
  result.push(binarySearch(arrM[i]));
}

console.log(result.join("\n"));
