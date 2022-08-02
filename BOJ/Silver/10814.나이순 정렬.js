let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let arr = input.slice(1).map((el) => el.split(" "));

arr.sort((a, b) => {
  if (a[0] === b[0]) return b[1] - a[1];
  else return a[0] - b[0];
});

let result = arr.map((el) => el.join(" "));
console.log(result.join("\n").trim());
