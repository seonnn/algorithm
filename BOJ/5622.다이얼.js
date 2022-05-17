const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let buttonArr = [
  2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9,
];
let buttonPressTime = 0;

for (let i = 0; i < input.length; i++) {
  buttonPressTime += buttonArr[input[i].charCodeAt() - 65];
}

console.log(buttonPressTime + input.length);
