var reductionOperations = function (nums) {
  nums.sort((a, b) => a - b);
  let cnt = 0;
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);

    cnt += set.size - 1;
  }

  return cnt;
};
