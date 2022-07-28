let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((str) => Number(str));

let length = input[0];

for (let i = 1; i <= length; i++) {
  let num = input[i];
  let arr = Array(num + 1)
    .fill(true)
    .fill(false, 0, 2);
  let primeArr = [];
  for (j = 2; j * j <= num; j++) {
    if (arr[j]) {
      for (let k = j * j; k <= num; k += j) {
        arr[k] = false;
      }
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j]) {
      primeArr.push(j);
    }
  }

  if (primeArr.includes(num / 2)) {
    console.log(`${num / 2} ${num / 2}`);
  } else {
    for (j = num / 2; j >= 0; j--) {
      if (primeArr.includes(j) && primeArr.includes(num - j)) {
        console.log(`${j} ${num - j}`);
        break;
      }
    }
  }
}
