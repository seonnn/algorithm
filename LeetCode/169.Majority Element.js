var majorityElement = function (nums) {
  let obj = {};
  let max = 0;
  let res = null;

  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) obj[nums[i]] = 0;

    obj[nums[i]] += 1;

    if (max < obj[nums[i]]) {
      max = obj[nums[i]];
      res = nums[i];
    }
  }

  return res;
};
