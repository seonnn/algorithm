// dfs
var countNodes = function (root) {
  if (!root) return 0;

  if (!root.left && !root.right) return 1;

  return 1 + countNodes(root.left) + countNodes(root.right);
};
