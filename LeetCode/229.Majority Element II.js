var majorityElement = function (nums) {
  let min = Math.floor(nums.length / 3);
  let cnt = {};
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) continue;

    cnt[nums[i]] = cnt[nums[i]] > 0 ? cnt[nums[i]] + 1 : 1;

    if (cnt[nums[i]] > min) set.add(nums[i]);
  }

  return [...set].sort((a, b) => a - b);
};
