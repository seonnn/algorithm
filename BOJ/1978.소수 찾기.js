let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let inputNum = Number(input[0]);
let inputArr = input[1].split(" ").map((str) => Number(str));
let count = 0;

for (i = 0; i < inputNum; i++) {
  if (inputArr[i] === 1) {
    continue;
  } else {
    for (j = 2; j <= inputArr[i]; j++) {
      if (inputArr[i] === j) {
        count += 1;
      } else if (inputArr[i] % j === 0) {
        break;
      }
    }
  }
}

console.log(count);
