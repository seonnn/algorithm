var equalPairs = function (grid) {
  const row = {};
  const col = {};

  for (let i = 0; i < grid.length; i++) {
    let r = "";
    let c = "";
    for (let j = 0; j < grid[0].length; j++) {
      r = r + grid[i][j] + ",";
      c = c + grid[j][i] + ",";
    }
    if (!row[r]) row[r] = 0;
    if (!col[c]) col[c] = 0;

    row[r] += 1;
    col[c] += 1;
  }

  let res = 0;

  for (let key in row) {
    if (row[key] && col[key]) {
      res += row[key] * col[key];
    }
  }

  return res;
};
