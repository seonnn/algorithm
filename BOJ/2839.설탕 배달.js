let input = require("fs").readFileSync("/dev/stdin").toString().trim();

input = Number(input);
let fiveKgCount = Math.floor(input / 5);
let withoutFive = input % 5;
let result = 0;

if (withoutFive === 0) {
  result = fiveKgCount;
} else if (withoutFive % 3 === 0) {
  result = withoutFive / 3 + fiveKgCount;
} else {
  for (i = fiveKgCount - 1; i >= 0; i--) {
    if ((input - i * 5) % 3 === 0) {
      result = (input - i * 5) / 3 + i;
      break;
    }
  }
}

if (result === 0) {
  result = -1;
}

console.log(result);
