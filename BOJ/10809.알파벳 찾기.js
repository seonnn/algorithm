const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let alphabetArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

for (let i = 0; i < alphabetArr.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j] === alphabetArr[i]) {
      alphabetArr[i] = input.indexOf(alphabetArr[i]);
    }
    if (typeof alphabetArr[i] === "number") {
      break;
    }
  }
}

for (let i = 0; i < alphabetArr.length; i++) {
  if (typeof alphabetArr[i] === "string") {
    alphabetArr[i] = -1;
  }
}

console.log(alphabetArr.join(" "));
