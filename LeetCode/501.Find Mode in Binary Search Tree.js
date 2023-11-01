var findMode = function (root) {
  let mode = {};

  let queue = [root];

  while (queue.length) {
    let node = queue.shift();

    mode[node.val] = mode[node.val] > 0 ? mode[node.val] + 1 : 1;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  const max = Math.max(...Object.values(mode));
  const res = [];

  for (let key in mode) {
    if (mode[key] === max) res.push(+key);
  }

  return res;
};
