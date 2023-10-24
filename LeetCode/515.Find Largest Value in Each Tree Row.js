var largestValues = function (root) {
  let res = [];

  if (!root) return res;

  root.level = 0;
  const queue = [root];

  while (queue.length) {
    let node = queue.shift();
    res[node.level] = typeof res[node.level] === "number" ? Math.max(node.val, res[node.level]) : node.val;

    if (node.left) {
      node.left.level = node.level + 1;
      queue.push(node.left);
    }

    if (node.right) {
      node.right.level = node.level + 1;
      queue.push(node.right);
    }
  }

  return res;
};
