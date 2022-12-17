var maxAncestorDiff = function (root) {
  if (!root) return 0;

  function helper(node, min, max) {
    if (!node) return max - min;

    max = Math.max(node.val, max);
    min = Math.min(node.val, min);

    return Math.max(helper(node.left, min, max), helper(node.right, min, max));
  }

  return helper(root, root.val, root.val);
};
