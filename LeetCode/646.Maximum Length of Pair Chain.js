var findLongestChain = function (pairs) {
  pairs.sort((a, b) => a[1] - b[1]);

  let cnt = 0;
  let temp;

  for (let i = 0; i < pairs.length; i++) {
    if (i === 0 || pairs[i][0] > temp) {
      temp = pairs[i][1];
      cnt++;
    }
  }

  return cnt;
};
