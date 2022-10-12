var findTarget = function (root, k) {
  let num = [];
  function helper(node) {
    if (!node) return;

    num.push(node.val);

    return helper(node.left) || helper(node.right);
  }

  helper(root);

  // num 배열을 순회하며 k에서 num의 i번째 숫자를 뺀 나머지 값을 배열이 포함하고 있는지 확인
  for (let i = 0; i < num.length - 1; i++) {
    if (num.slice(i + 1).includes(k - num[i])) return true;
  }

  return false;
};
