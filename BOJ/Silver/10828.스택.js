let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((str) => str.split(" "));

let leng = Number(input[0]);
let stack = [];
let res = [];

for (let i = 1; i <= leng; i++) {
  if (input[i][0] === "push") {
    stack[stack.length] = Number(input[i][1]);
  } else if (input[i][0] === "top") {
    if (stack.length > 0) {
      res.push(Number(stack[stack.length - 1]));
    } else {
      res.push(-1);
    }
  } else if (input[i][0] === "size") {
    res.push(stack.length);
  } else if (input[i][0] === "empty") {
    if (stack.length > 0) {
      res.push(0);
    } else {
      res.push(1);
    }
  } else if (input[i][0] === "pop") {
    if (stack.length > 0) {
      res.push(Number(stack[stack.length - 1]));
      stack.pop();
    } else {
      res.push(-1);
    }
  }
}

console.log(res.join("\n"));
