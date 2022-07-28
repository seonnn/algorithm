let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((str) => Number(str));

for (i = input[0]; i <= input[1]; i++) {
  if (i === 1) {
    continue;
  } else if (i === 2) {
    console.log(i);
  } else if (i === 3) {
    console.log(i);
  } else {
    for (j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        break;
      } else if (j === Math.floor(Math.sqrt(i))) {
        console.log(i);
      }
    }
  }
}
