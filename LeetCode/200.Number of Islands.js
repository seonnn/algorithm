var numIslands = function (grid) {
  let cnt = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        checkLand(i, j);
        cnt++;
      }
    }
  }

  function checkLand(x, y) {
    if (grid[x][y] === "1") grid[x][y] = "0";
    else return;

    if (x > 0) checkLand(x - 1, y);
    if (x < grid.length - 1) checkLand(x + 1, y);
    if (y > 0) checkLand(x, y - 1);
    if (y < grid[0].length - 1) checkLand(x, y + 1);
  }

  return cnt;
};
