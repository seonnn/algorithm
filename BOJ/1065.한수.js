const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let count = 0;
for (i = 1; i <= input; i++) {
  if (String(i).length <= 2) {
    count += 1;
  } else {
    if (
      Number(String(i)[0]) - Number(String(i)[1]) ===
      Number(String(i)[1]) - Number(String(i)[2])
    ) {
      count += 1;
    } else {
      continue;
    }
  }
}

console.log(count);
