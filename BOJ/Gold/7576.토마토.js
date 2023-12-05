let input = `6 4
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 1
`;

input = input.split("\n");

const [x, y] = input
  .shift()
  .split(" ")
  .map((s) => +s);
let tomato = input.map((s) => s.split(" ").map((s) => +s));

function solution(x, y, tomato) {
  let day = 0;
  let total = 0;
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];
  const queue = [];
  let pointer = 0;

  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      if (tomato[i][j] === 0) total++;
      if (tomato[i][j] === 1) queue.push([i, j, 0]);
    }
  }

  while (pointer < queue.length) {
    const [tempY, tempX, tempD] = queue[pointer]; // shift()로 풀면 시간초과
    day = tempD;

    for (let i = 0; i < 4; i++) {
      if (
        tempY + dy[i] > -1 &&
        tempY + dy[i] < y &&
        tempX + dx[i] < x &&
        tempX + dx[i] > -1 &&
        tomato[tempY + dy[i]][tempX + dx[i]] === 0
      ) {
        tomato[tempY + dy[i]][tempX + dx[i]] = 1;
        queue.push([tempY + dy[i], tempX + dx[i], tempD + 1]);
        total--;
      }
    }

    pointer++;
  }

  return total > 0 ? -1 : day;
}

console.log(solution(x, y, tomato));
