var maxOperations = function (nums, k) {
  let obj = {};
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] === undefined) obj[nums[i]] = 0;

    const diff = k - nums[i];

    if (obj[diff]) {
      obj[diff]--;
      res++;
    } else {
      obj[nums[i]]++;
    }
  }

  return res;
};
