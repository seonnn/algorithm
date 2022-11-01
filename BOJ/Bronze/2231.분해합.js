let input = require("fs").readFileSync("/dev/stdin").toString().trim();

function constructor(input) {
  let len = input.length;
  let startNum = +input - len * 9;
  let answer = 0;

  while (+input >= startNum) {
    let sumNum = String(startNum)
      .split("")
      .reduce((acc, cur) => +acc + +cur, startNum);

    if (sumNum === +input) {
      answer += startNum;
      break;
    }

    startNum++;
  }

  return answer;
}

console.log(constructor(input));
