var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
  const visited = {};
  const stack = [0];

  while (stack.length > 0) {
    const node = stack.pop();
    if (visited[node]) return false;
    visited[node] = true;

    const left = leftChild[node];
    const right = rightChild[node];

    if (left > -1) {
      stack.push(left);
    }
    if (right > -1) {
      stack.push(right);
    }
  }

  return Object.keys(visited).length === n;
};
