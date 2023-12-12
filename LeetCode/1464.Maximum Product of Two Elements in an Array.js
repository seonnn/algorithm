var maxProduct = function (nums) {
  nums.sort((a, b) => a - b);
  return (nums.at(-1) - 1) * (nums.at(-2) - 1);
};
