var increasingTriplet = function (nums) {
  let n1;
  let n2;

  for (let i = 0; i < nums.length; i++) {
    if (n1 === undefined || n1 >= nums[i]) {
      n1 = nums[i];
    } else if (n2 === undefined || n2 >= nums[i]) {
      n2 = nums[i];
    } else {
      return true;
    }
  }

  return false;
};
