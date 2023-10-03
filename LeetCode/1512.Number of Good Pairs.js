var numIdenticalPairs = function (nums) {
  let max = Math.max(...nums);
  let arr = Array(max + 1).fill(0);
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    arr[nums[i]] += 1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (arr[nums[i]] > 0) arr[nums[i]] -= 1;
    res += arr[nums[i]];
  }

  return res;
};
