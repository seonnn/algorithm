let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((el) => +el);

let leng = input[0];
let arr = [];
let sum = 0;

for (let i = 1; i <= leng; i++) {
  if (input[i] === 0) {
    arr.pop();
  } else {
    arr.push(input[i]);
  }
}

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);
