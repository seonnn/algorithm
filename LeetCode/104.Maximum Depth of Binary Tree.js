// DFS
var maxDepth = function (root) {
  let max = 0;

  function helper(node, depth) {
    if (!node) {
      max = Math.max(depth, max);
      return;
    }

    helper(node.left, depth + 1);
    helper(node.right, depth + 1);
  }

  helper(root, 0);

  return max;
};

// BFS
var maxDepth = function (root) {
  if (!root) return root;

  let queue = [[root, 1]];
  let max = 1;

  while (queue.length) {
    let [node, depth] = queue.shift();

    if (node.left) {
      queue.push([node.left, depth + 1]);
      max = Math.max(max, depth + 1);
    }

    if (node.right) {
      queue.push([node.right, depth + 1]);
      max = Math.max(max, depth + 1);
    }
  }

  return max;
};
