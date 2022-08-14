var increasingBST = function (root) {
  let result = new TreeNode();
  let temp = result;

  const traverse = (node) => {
    if (node.left) traverse(node.left);
    temp.right = node;
    node.left = null;
    temp = temp.right;
    if (node.right) traverse(node.right);
  };

  traverse(root);

  result = result.right;
  return result;
};
