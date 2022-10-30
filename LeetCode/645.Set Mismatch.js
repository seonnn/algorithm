var findErrorNums = function (nums) {
  let sum = (nums.length * (nums.length + 1)) / 2;
  let numsSum = nums.reduce((acc, cur) => acc + cur);

  let numsSet = new Set(nums);
  let numsSetSum = [...numsSet].reduce((acc, cur) => acc + cur);

  return [numsSum - numsSetSum, sum - numsSetSum];
};
