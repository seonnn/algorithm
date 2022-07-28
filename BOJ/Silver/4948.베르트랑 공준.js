let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((str) => Number(str));

for (i = 0; i < input.length; i++) {
  if (input[i] === 0) {
    break;
  }

  let count = 0;
  for (j = input[i] + 1; j <= input[i] * 2; j++) {
    if (j < 2) {
      continue;
    } else if (j === 2) {
      count++;
    } else if (j === 3) {
      count++;
    } else {
      for (k = 2; k <= Math.sqrt(j); k++) {
        if (j % k === 0) {
          break;
        } else if (k === Math.floor(Math.sqrt(j))) {
          count++;
        }
      }
    }
  }
  console.log(count);
}
