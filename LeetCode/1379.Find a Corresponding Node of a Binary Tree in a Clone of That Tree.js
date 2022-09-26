var getTargetCopy = function (original, cloned, target) {
  function helper(node, targetNode) {
    // node가 더 이상 없으면 return
    if (!node) return;

    // node가 있을 때
    // node.val이 target.val과 같으면 node를 return
    if (node.val === target.val) return node;
    // 그렇지 않으면 재귀함수 실행
    else return helper(node.left, targetNode) || helper(node.right, targetNode);
  }

  // cloned의 node를 return해야 하기 때문에 helper함수에 clonde와 target을 인자로 넣은 결과값을 return
  return helper(cloned, target);
};
