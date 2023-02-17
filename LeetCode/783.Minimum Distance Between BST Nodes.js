var minDiffInBST = function (root) {
  let nums = [];
  function helper(node) {
    if (!node) return;

    nums.push(node.val);

    helper(node.left);
    helper(node.right);
  }

  helper(root);

  nums.sort((a, b) => a - b);
  let minGap = 1000000;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] < minGap) minGap = nums[i + 1] - nums[i];
  }

  return minGap;
};
