var invertTree = function (root) {
  function helper(node) {
    if (!node) return;

    if (node.left && node.right) {
      let temp = node.right;

      node.right = node.left;
      node.left = temp;
    } else if (node.left) {
      node.right = node.left;
      node.left = null;
    } else if (node.right) {
      node.left = node.right;
      node.right = null;
    }

    helper(node.left);
    helper(node.right);
  }

  helper(root);

  return root;
};
