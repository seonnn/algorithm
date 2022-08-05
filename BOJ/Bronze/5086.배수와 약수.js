let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let arr = input.map((el) => el.split(" "));
let result = [];

for (let i = 0; i < arr.length; i++) {
  let q1 = +arr[i][1] / +arr[i][0];
  let q2 = +arr[i][0] / +arr[i][1];
  let r1 = +arr[i][1] % +arr[i][0];
  let r2 = +arr[i][0] % +arr[i][1];

  if (+arr[i][0] === 0) break;

  if (q2 > 0 && r2 === 0) result.push("multiple");
  else if (q1 > 0 && r1 === 0) result.push("factor");
  else result.push("neither");
}

console.log(result.join("\n").trim());
