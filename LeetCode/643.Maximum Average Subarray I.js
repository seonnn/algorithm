var findMaxAverage = function (nums, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let max = sum / k;

  for (let i = 1; i <= nums.length - k; i++) {
    sum -= nums[i - 1];
    sum += nums[i + k - 1];

    max = Math.max(max, sum / k);
  }

  return max;
};
