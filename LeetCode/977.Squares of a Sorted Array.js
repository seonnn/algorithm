var sortedSquares = function (nums) {
  return nums.map((n) => n ** 2).sort((a, b) => a - b);
};
