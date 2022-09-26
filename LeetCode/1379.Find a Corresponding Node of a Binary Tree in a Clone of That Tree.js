var getTargetCopy = function (original, cloned, target) {
  function helper(node, targetNode) {
    if (!node) return;

    if (node.val === target.val) return node;
    else return helper(node.left, targetNode) || helper(node.right, targetNode);
  }

  return helper(cloned, target);
};
