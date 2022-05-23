let input = require("fs").readFileSync("/dev/stdin").toString().trim();

input = Number(input);
let num = 0;
let n = 1;
let res = "";

while (true) {
  num += n;
  if (input <= num) {
    if (n % 2 === 0) {
      res = `${n - (num - input)}/${1 + (num - input)}`;
    } else {
      res = `${1 + (num - input)}/${n - (num - input)}`;
    }
    break;
  }
  n++;
}

console.log(res);
