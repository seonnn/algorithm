var removeDuplicates = function (nums) {
  let len = nums.length;
  let temp = 0;

  while (temp < len) {
    if (nums[temp] === nums[temp + 1]) {
      nums.splice(temp + 1, 1);
    } else {
      temp++;
    }

    len = nums.length;
  }

  return nums.length;
};
