var goodNodes = function (root) {
  let cnt = 1;
  const queue = [[root, root.val]];

  while (queue.length) {
    const [node, max] = queue.shift();

    if (node.left) {
      if (max <= node.left.val) cnt++;
      queue.push([node.left, Math.max(max, node.left.val)]);
    }

    if (node.right) {
      if (max <= node.right.val) cnt++;
      queue.push([node.right, Math.max(max, node.right.val)]);
    }
  }

  return cnt;
};
