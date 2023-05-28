function solution(maps) {
  let xLen = maps.length;
  let yLen = maps[0].length;

  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  let queue = [[0, 0, 1]];

  while (queue.length) {
    let [x, y, ans] = queue.shift();
    if (x === xLen - 1 && y === yLen - 1) return ans;

    for (let i = 0; i < 4; i++) {
      let newX = x + dx[i];
      let newY = y + dy[i];

      if (newX >= 0 && newX < xLen && newY >= 0 && newY < yLen && maps[newX][newY]) {
        maps[newX][newY] = 0;
        queue.push([newX, newY, ans + 1]);
      }
    }
  }

  return -1;
}
