var isSameTree = function (p, q) {
  function helper(pNode, qNode) {
    // pNode와 qNode 둘 다 null일 때 true return
    if (!pNode && !qNode) return true;

    // pNode와 qNode 둘 다 null일 때는 이미 위에서 걸러졌기 때문에
    // 둘 중 하나가 null이거나 pNode와 qNode의 val이 다를 때 false return
    if (!pNode || !qNode || pNode.val !== qNode.val) return false;

    return helper(pNode.left, qNode.left) && helper(pNode.right, qNode.right);
  }

  return helper(p, q);
};
