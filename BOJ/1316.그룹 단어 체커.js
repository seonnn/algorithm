let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let groupWordCount = 0;

for (let i = 1; i <= Number(input[0]); i++) {
  let letterArr = [];
  let word = input[i];
  for (let j = 0; j < word.length; j++) {
    if (!letterArr.includes(word[j])) {
      letterArr.push(word[j]);
      if (j === word.length - 1) {
        groupWordCount += 1;
      }
    } else {
      if (word[j] !== letterArr[letterArr.length - 1]) {
        break;
      } else {
        if (j === word.length - 1) {
          groupWordCount += 1;
        }
      }
    }
  }
}

console.log(groupWordCount);
