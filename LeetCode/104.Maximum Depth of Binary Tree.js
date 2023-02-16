var maxDepth = function (root) {
  let max = 0;

  function helper(node, depth) {
    if (!node) {
      max = Math.max(depth, max);
      return;
    }

    helper(node.left, depth + 1);
    helper(node.right, depth + 1);
  }

  helper(root, 0);

  return max;
};
