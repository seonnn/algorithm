var imageSmoother = function (img) {
  let res = Array.from({ length: img.length }, () => Array(img[0].length));

  const dx = [-1, 0, 1, 1, 1, 0, -1, -1];
  const dy = [-1, -1, -1, 0, 1, 1, 1, 0];

  for (let i = 0; i < img.length; i++) {
    for (let j = 0; j < img[0].length; j++) {
      let sum = img[i][j];
      let length = 1;
      for (let k = 0; k < dy.length; k++) {
        if (i + dy[k] > -1 && i + dy[k] < img.length && j + dx[k] > -1 && j + dx[k] < img[0].length) {
          sum += img[i + dy[k]][j + dx[k]];
          length++;
        }
      }

      res[i][j] = Math.floor(sum / length);
    }
  }

  return res;
};
