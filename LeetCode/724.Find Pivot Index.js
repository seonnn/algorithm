var pivotIndex = function (nums) {
  let sum = nums.reduce((acc, cur) => acc + cur, 0);
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = sum - nums[i];

    if (sum === left) return i;

    left = left + nums[i];
  }

  return -1;
};
