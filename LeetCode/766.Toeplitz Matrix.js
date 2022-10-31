var isToeplitzMatrix = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (
        i + 1 < matrix.length &&
        matrix[i + 1][j + 1] >= 0 &&
        row[j] !== matrix[i + 1][j + 1]
      ) {
        return false;
      }
    }
  }

  return true;
};
