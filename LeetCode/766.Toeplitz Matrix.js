var isToeplitzMatrix = function (matrix) {
  for (let i = 0; i < matrix.length - 1; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length - 1; j++) {
      if (row[j] !== matrix[i + 1][j + 1]) return false;
    }
  }

  return true;
};
