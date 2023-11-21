var countNicePairs = function (nums) {
  let obj = {};
  let cnt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!obj[rev(nums[i]) - nums[i]]) obj[rev(nums[i]) - nums[i]] = 0;
    obj[rev(nums[i]) - nums[i]]++;
  }

  function rev(n) {
    const str = String(n);
    let res = "";
    for (let i = str.length - 1; i >= 0; i--) {
      res += str[i];
    }

    return +res;
  }

  for (n in obj) {
    if (obj[n] > 1) {
      cnt += (obj[n] * (obj[n] - 1)) / 2;
      cnt = cnt % (10 ** 9 + 7);
    }
  }

  return cnt;
};
