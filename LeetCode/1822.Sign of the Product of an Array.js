var arraySign = function (nums) {
  let nega = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) return 0;
    if (nums[i] < 0) nega++;
  }

  return nega % 2 === 0 ? 1 : -1;
};
