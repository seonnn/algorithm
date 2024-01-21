var longestSubarray = function (nums) {
  let p = 0;
  let zero = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zero++;

    while (zero > 1) {
      if (nums[p++] === 0) zero--;
    }

    max = Math.max(max, i - p);
  }

  return max;
};
