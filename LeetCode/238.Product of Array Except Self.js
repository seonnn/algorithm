var productExceptSelf = function (nums) {
  let forward = Array(nums.length);
  let reverse = Array(nums.length);

  let f = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      forward[i] = f;
      continue;
    }

    f = f * nums[i];
    forward[i] = f;
  }

  let r = nums.at(-1);

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      reverse[nums.length - 1] = r;
      continue;
    }

    r = r * nums[i];
    reverse[i] = r;
  }

  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (i + 1 < nums.length && i - 1 >= 0) res[i] = forward[i - 1] * reverse[i + 1];
    else if (i + 1 < nums.length && i - 1 < 0) res[i] = reverse[i + 1];
    else res[i] = forward[i - 1];
  }

  return res;
};
