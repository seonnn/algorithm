let input = require("fs").readFileSync("/dev/stdin").toString().trim();

input = Number(input);

for (i = 2; i <= input; i++) {
  while (input % i === 0) {
    if (input === 1) {
      break;
    } else {
      input = input / i;
      console.log(i);
    }
  }
}
