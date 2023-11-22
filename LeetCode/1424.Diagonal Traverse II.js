var findDiagonalOrder = function (nums) {
  const res = [];
  let maxRowLength = Math.max(...nums.map((arr) => arr.length));

  for (let i = 0; i < nums.length + maxRowLength - 1; i++) {
    let [x, y] = [i, 0];

    while (x >= 0) {
      if (nums[x] && nums[x][y]) res.push(nums[x][y]);

      x--;
      y++;
    }
  }

  return res;
};
