let input = require("fs").readFileSync("/dev/stdin").toString().trim();

input = input.toUpperCase();
let letterCount = 1;
let letterArr = [];
let letterCountArr = [];
let freqLetterCount;
let freqLetterCountNum = 0;

for (let i = 0; i < input.length - 1; i++) {
  if (!letterArr.includes(input[i])) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        letterCount += 1;
      }
    }
    letterArr.push(input[i]);
    letterCountArr.push(letterCount);
  }
  letterCount = 1;
}

freqLetterCount = Math.max(...letterCountArr);
for (let i = 0; i < letterCountArr.length; i++) {
  if (letterCountArr[i] === freqLetterCount) {
    freqLetterCountNum += 1;
  }
}

if (input.length === 1) {
  console.log(input);
} else {
  if (freqLetterCountNum === 1) {
    console.log(letterArr[letterCountArr.indexOf(freqLetterCount)]);
  } else {
    console.log("?");
  }
}
