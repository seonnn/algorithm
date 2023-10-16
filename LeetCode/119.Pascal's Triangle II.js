var getRow = function (rowIndex) {
  const res = [[1], [1, 1]];

  for (let i = 1; i < rowIndex; i++) {
    const arr = [];
    for (let j = 0; j < res[i].length + 1; j++) {
      if (j === 0 || j === res[i].length) {
        arr.push(1);
        continue;
      }

      arr.push(res[i][j - 1] + res[i][j]);
    }

    res.push(arr);
  }

  return res[rowIndex];
};
