let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let alphabetArr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let i = 0; i < alphabetArr.length; i++) {
  if (input.includes(alphabetArr[i])) {
    input = input.replaceAll(alphabetArr[i], "*");
  }
}

console.log(input.length);
