let input = require("fs").readFileSync("/dev/stdin").toString().trim();

function constructor(input) {
  let len = input.length;
  let startNum = +input - len * 9;

  while (+input >= startNum) {
    let sumNum =
      String(startNum)
        .split("")
        .reduce((acc, cur) => +acc + +cur) + startNum;
    if (sumNum === +input) return startNum;
    startNum++;
  }

  return 0;
}

console.log(constructor(input));
