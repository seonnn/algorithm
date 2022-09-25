var inorderTraversal = function (root) {
  let result = [];

  // 중위순회
  function helper(node) {
    if (!node) return;

    // 왼쪽 node가 있을 때
    helper(node.left);

    // 왼쪽 노드가 없다면 자신의 val result에 push
    result.push(node.val);

    // 오른쪽 노드가 있을 때
    helper(node.right);
  }

  helper(root);

  return result;
};
