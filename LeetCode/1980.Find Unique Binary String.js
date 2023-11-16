var findDifferentBinaryString = function (nums) {
  const set = new Set(nums);
  let cnt = 0;

  while (cnt.toString(2).length <= nums[0].length) {
    if (set.has(cnt.toString(2).padStart(nums[0].length, "0"))) cnt++;
    else break;
  }

  return cnt.toString(2).padStart(nums[0].length, "0");
};
