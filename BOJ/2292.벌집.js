let input = require("fs").readFileSync("/dev/stdin").toString().trim();

input = Number(input);
let maxNum = 1;
let num = 0;

while (true) {
  maxNum = maxNum + 6 * num;
  if (input <= maxNum) {
    break;
  }
  num++;
}

console.log(num + 1);
