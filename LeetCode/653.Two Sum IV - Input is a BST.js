var findTarget = function (root, k) {
  let num = [];
  function helper(node) {
    if (!node) return;

    num.push(node.val);

    return helper(node.left) || helper(node.right);
  }

  helper(root);

  for (let i = 0; i < num.length; i++) {
    if (num.slice(i + 1).includes(k - num[i])) return true;
  }

  return false;
};
