var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
  const visited = {};
  let root = 0;

  for (let i = 0; i < leftChild.length; i++) {
    const left = leftChild[i];
    const right = rightChild[i];

    if (left === root || right === root) root = i;
  }

  const stack = [root];
  let cnt = 0;

  while (stack.length > 0) {
    const node = stack.pop();
    if (visited[node]) return false;
    visited[node] = true;
    cnt++;

    const left = leftChild[node];
    const right = rightChild[node];

    if (left > -1) {
      stack.push(left);
    }
    if (right > -1) {
      stack.push(right);
    }
  }

  return cnt === n;
};
