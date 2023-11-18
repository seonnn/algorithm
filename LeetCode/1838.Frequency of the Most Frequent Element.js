var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b);

  let pointer = 0;
  let max = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (nums[i] * (i - pointer + 1) - sum > k) {
      sum -= nums[pointer];
      pointer++;
    }

    max = Math.max(max, i - pointer + 1);
  }

  return max;
};
