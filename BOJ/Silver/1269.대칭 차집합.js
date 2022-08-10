let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let [A, B] = input[0].split(" ").map((el) => +el);
let combinedArrSet = new Set(input[1].split(" ").concat(input[2].split(" ")));
let difference = A + B - [...combinedArrSet].length;

console.log(A + B - difference * 2);
