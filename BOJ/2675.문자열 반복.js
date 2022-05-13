let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// 주의: input = ["2", "3 ABC", "5 /HTP"]
const inputCount = Number(input[0]);

for (let i = 1; i <= inputCount; i++) {
  let repeatCount = Number(input[i].split(" ")[0]);
  let inputWord = input[i].split(" ")[1];
  let outputWord = "";
  for (let j = 0; j < inputWord.length; j++) {
    outputWord += inputWord[j].repeat(repeatCount);
  }
  console.log(outputWord);
}
