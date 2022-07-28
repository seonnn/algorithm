let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let customerCount = Number(input[0]);

for (i = 1; i <= customerCount; i++) {
  let info = input[i].split(" ").map((str) => Number(str));
  let floor = info[2] % info[0] === 0 ? info[0] : info[2] % info[0];
  let unit =
    floor === info[0] ? info[2] / info[0] : Math.floor(info[2] / info[0]) + 1;
  let roomNumber =
    unit < 10
      ? String(floor) + "0" + String(unit)
      : String(floor) + String(unit);
  console.log(roomNumber);
}
