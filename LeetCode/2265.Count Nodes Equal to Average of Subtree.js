var averageOfSubtree = function (root) {
  let res = 0;

  function dfs(node) {
    if (!node) return [0, 0];

    let [sum, cnt] = [node.val, 1];

    if (node.left) {
      const [leftSum, leftCnt] = dfs(node.left);
      sum += leftSum;
      cnt += leftCnt;
    }

    if (node.right) {
      const [rightSum, rightCnt] = dfs(node.right);
      sum += rightSum;
      cnt += rightCnt;
    }

    const average = Math.floor(sum / cnt);

    if (node.val === average) res++;

    return [sum, cnt];
  }

  dfs(root);

  return res;
};
