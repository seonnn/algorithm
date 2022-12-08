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

// helper 함수 logic 분리
var leafSimilar = function (root1, root2) {
  let arr1 = helper(root1);
  let arr2 = helper(root2);

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

function helper(node) {
  if (!node) return;

  let leaf = [];
  let stack = [node];
  while (stack.length) {
    let curNode = stack.pop();

    if (!curNode.left && !curNode.right) leaf.push(curNode.val);

    if (curNode.left) stack.push(curNode.left);
    if (curNode.right) stack.push(curNode.right);
  }

  return leaf;
}
