let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let leng = Number(input[0]);

function solution(s) {
  let arr = [];

  if (s[0] === ")") {
    return "NO";
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      arr.push(s[i]);
    }

    if (s[i] === ")" && arr.length > 0) {
      arr.pop();
    } else if (s[i] === ")" && arr.length === 0) {
      return "NO";
    }

    if (i === s.length - 1 && arr.length > 0) {
      return "NO";
    }
  }

  return "YES";
}

for (let i = 1; i <= leng; i++) {
  console.log(solution(input[i].trim()));
}
