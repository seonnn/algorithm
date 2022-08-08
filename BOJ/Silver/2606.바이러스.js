let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function detectVirus(input) {
  let [N, T] = input.splice(0, 2).map((el) => +el);
  let connection = [];
  let visited = [];
  let result = [];

  for (let i = 0; i <= N; i++) {
    connection.push([]);
    visited.push(false);
  }

  for (let i = 0; i < input.length; i++) {
    let el = input[i].split(" ").map((el) => +el);
    connection[el[0]].push(el[1]);
    connection[el[1]].push(el[0]);
  }

  function helper(visit) {
    visited[visit] = true;
    result.push(visit);

    for (let i = 0; i < connection[visit].length; i++) {
      let el = connection[visit][i];
      if (!visited[el]) helper(el);
    }
  }

  helper(1);
  return result.length - 1;
}

console.log(detectVirus(input));
