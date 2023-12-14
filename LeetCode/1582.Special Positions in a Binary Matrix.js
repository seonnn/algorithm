var numSpecial = function (mat) {
  let res = 0;
  let x = {};
  let y = {};

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        x[j] = x[j] ? x[j] + 1 : 1;
        y[i] = y[i] ? y[i] + 1 : 1;
      }
    }
  }

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        if (x[j] === 1 && y[i] === 1) res++;
      }
    }
  }

  return res;
};
