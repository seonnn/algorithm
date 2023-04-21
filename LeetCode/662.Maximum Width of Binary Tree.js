var widthOfBinaryTree = function (root) {
  let len = [[1n, 1n]];
  let queue = [];
  let curLevel = 0;

  root.level = 0;
  root.nth = 1n;
  queue.push(root);

  while (queue.length) {
    let curNode = queue.shift();

    if (curLevel !== curNode.level) {
      curLevel = curNode.level;
      len[curNode.level] = [curNode.nth, null];
    } else {
      len[curNode.level][1] = curNode.nth;
    }

    if (curNode.left) {
      curNode.left.level = curNode.level + 1;
      curNode.left.nth = curNode.nth * 2n - 1n;
      queue.push(curNode.left);
    }

    if (curNode.right) {
      curNode.right.level = curNode.level + 1;
      curNode.right.nth = curNode.nth * 2n;
      queue.push(curNode.right);
    }
  }

  len = len.map((arr) => (arr[1] === null ? 0n : arr[1] - arr[0])).map((n) => Number(n) + 1);

  return Math.max(...len);
};
