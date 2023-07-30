function solution(maps) {
  var answer = [];
  maps = maps.map((map) => map.split(""));
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === "X") continue;

      const queue = [[i, j]];
      let cnt = 0;

      while (queue.length) {
        let [y, x] = queue.shift();

        if (maps[y][x] === "X") continue;

        cnt += +maps[y][x];
        maps[y][x] = "X";

        for (let k = 0; k < 4; k++) {
          if (
            y + dy[k] >= 0 &&
            y + dy[k] < maps.length &&
            x + dx[k] >= 0 &&
            x + dx[k] < maps[0].length &&
            maps[y + dy[k]][x + dx[k]] > 0
          ) {
            queue.push([y + dy[k], x + dx[k]]);
          }
        }
      }

      answer.push(cnt);
    }
  }
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
