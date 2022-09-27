var isSameTree = function (p, q) {
  function helper(pNode, qNode) {
    if (!pNode && !qNode) return true;
    if (!pNode || !qNode || pNode.val !== qNode.val) return false;

    return helper(pNode.left, qNode.left) && helper(pNode.right, qNode.right);
  }

  return helper(p, q);
};
