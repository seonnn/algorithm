var zigzagLevelOrder = function (root) {
  let result = [[]];

  function helper(node, order) {
    if (!node) return;

    if (!result[order]) result.push([]);

    if (order % 2 === 1) result[order].push(node.val);
    else result[order].unshift(node.val);

    helper(node.left, order + 1);
    helper(node.right, order + 1);
  }

  helper(root, 1);

  result.shift();

  return result;
};
