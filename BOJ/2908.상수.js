let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let num1 = "";
let num2 = "";

for (let i = input[0].length - 1; i >= 0; i--) {
  num1 += input[0][i];
}

for (let i = input[1].length - 1; i >= 0; i--) {
  num2 += input[1][i];
}

console.log(Number(num1) > Number(num2) ? Number(num1) : Number(num2));
