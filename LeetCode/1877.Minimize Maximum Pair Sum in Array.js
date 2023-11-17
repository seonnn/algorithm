var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let max = 0;

  for (let i = 0; i < nums.length / 2; i++) {
    max = Math.max(nums[i] + nums[nums.length - i - 1], max);
  }

  return max;
};
