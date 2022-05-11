const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let count = Number(input[0]);
let num = input[1];

let result = 0;

for (let i = 0; i < count; i++) {
  result += Number(num[i]);
}

console.log(result);
