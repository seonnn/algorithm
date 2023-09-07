var reverseBetween = function (head, left, right) {
  const nodes = [];
  let node = head;
  let idx = 1;
  let isNodeToReverse = false;

  while (node) {
    if (idx === left) {
      isNodeToReverse = true;
    }

    if (isNodeToReverse) nodes.push(node.val);

    if (idx === right) {
      isNodeToReverse = false;
    }

    idx += 1;
    node = node.next;
  }

  idx = 1;
  node = head;

  while (node) {
    if (left <= idx && right >= idx) {
      node.val = nodes.pop();
    }

    idx++;
    node = node.next;
  }

  return head;
};
