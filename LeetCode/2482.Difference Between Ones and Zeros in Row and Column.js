var onesMinusZeros = function (grid) {
  let res = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(0));
  let row = {};
  let col = {};

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        if (!col[j]) col[j] = [0, 0];
        if (!row[i]) row[i] = [0, 0];
        col[j][1] += 1;
        row[i][1] += 1;
      } else {
        if (!col[j]) col[j] = [0, 0];
        if (!row[i]) row[i] = [0, 0];
        col[j][0] += 1;
        row[i][0] += 1;
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      res[i][j] = row[i][1] + col[j][1] - row[i][0] - col[j][0];
    }
  }

  return res;
};
