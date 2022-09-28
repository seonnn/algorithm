var rangeSumBST = function (root, low, high) {
  let sum = 0;
  function helper(node) {
    if (!node) return;

    if (node.val >= low && node.val <= high) sum += node.val;

    return helper(node.left) || helper(node.right);
  }

  helper(root);

  return sum;
};
