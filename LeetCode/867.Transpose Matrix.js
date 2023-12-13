var transpose = function (matrix) {
  let res = Array.from({ length: matrix[0].length }, () => Array(matrix.length));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      res[j][i] = matrix[i][j];
    }
  }

  return res;
};
