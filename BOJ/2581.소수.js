let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => Number(str));
let primeArr = [];
let res = 0;

for (i = input[0]; i <= input[1]; i++) {
  if (i < 2) {
    continue;
  } else {
    if (i === 2) {
      primeArr.push(i);
      res += i;
    } else {
      for (j = 2; j < i; j++) {
        if (i % j === 0) {
          break;
        } else if (j === i - 1) {
          primeArr.push(i);
          res += i;
        }
      }
    }
  }
}

if (primeArr.length === 0) {
  console.log(-1);
} else {
  console.log(res);
  console.log(primeArr[0]);
}
