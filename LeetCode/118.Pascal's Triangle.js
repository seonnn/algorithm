var generate = function (numRows) {
  let res = [];

  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      res.push([1]);
      continue;
    }

    if (i === 1) {
      res.push([1, 1]);
      continue;
    }

    let nums = [];

    for (let j = 0; j <= res[i - 1].length; j++) {
      if (j === 0 || j === res[i - 1].length) {
        nums.push(1);
        continue;
      }

      nums.push(res[i - 1][j - 1] + res[i - 1][j]);
    }

    res.push(nums);
  }

  return res;
};
