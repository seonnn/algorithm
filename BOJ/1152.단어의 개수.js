let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let wordCount = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i].trim().length > 0) {
    wordCount += 1;
  }
}
console.log(wordCount);
