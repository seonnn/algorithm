var leafSimilar = function (root1, root2) {
  let arr1 = [];
  let arr2 = [];

  function helper1(node) {
    if (!node) return;

    if (!node.left && !node.right) arr1.push(node.val);

    return helper1(node.left) || helper1(node.right);
  }

  function helper2(node) {
    if (!node) return;

    if (!node.left && !node.right) arr2.push(node.val);

    return helper2(node.left) || helper2(node.right);
  }

  helper1(root1);
  helper2(root2);

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};
