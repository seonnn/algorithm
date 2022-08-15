let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let result = [];

for (let i = 1; i <= +input[0]; i++) {
  let temp = input[i];
  let total = 0;
  let score = 1;
  for (let j = 0; j < temp.length; j++) {
    if (temp[j] === "O") {
      total += score;
      score += 1;
    } else {
      score = 1;
    }
  }

  result.push(total);
}

console.log(result.join("\n"));
