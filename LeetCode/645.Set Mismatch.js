var findErrorNums = function (nums) {
  // 중복된 숫자가 없을 때의 합
  let sum = (nums.length * (nums.length + 1)) / 2;
  // nums 배열 요소의 합
  let numsSum = nums.reduce((acc, cur) => acc + cur);

  // Set 자료구조를 통한 중복 숫자 제거
  let numsSet = new Set(nums);
  // 중복 숫자를 제거한 nums 배열 요소의 합
  let numsSetSum = [...numsSet].reduce((acc, cur) => acc + cur);

  // [중복된 숫자, 중복으로 인해 빠진 숫자]가 담긴 배열을 반환
  return [numsSum - numsSetSum, sum - numsSetSum];
};
