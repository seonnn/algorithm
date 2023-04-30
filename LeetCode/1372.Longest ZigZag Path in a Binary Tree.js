var longestZigZag = function (root) {
  let max = 0;
  let queue = [];
  root.dir = "c";
  root.len = 0;
  queue.push(root);

  while (queue.length) {
    let node = queue.shift();
    max = Math.max(node.len, max);

    if (node.left) {
      node.left.dir = "l";
      node.left.len = node.left.dir === node.dir ? 1 : node.len + 1;
      queue.push(node.left);
    }

    if (node.right) {
      node.right.dir = "r";
      node.right.len = node.right.dir === node.dir ? 1 : node.len + 1;
      queue.push(node.right);
    }
  }

  return max;
};
