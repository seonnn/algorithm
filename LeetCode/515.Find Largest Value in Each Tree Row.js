// var largestValues = function (root) {
//   let res = [];

//   if (!root) return res;

//   root.level = 0;
//   const queue = [root];

//   while (queue.length) {
//     let node = queue.shift();
//     res[node.level] = typeof res[node.level] === "number" ? Math.max(node.val, res[node.level]) : node.val;

//     if (node.left) {
//       node.left.level = node.level + 1;
//       queue.push(node.left);
//     }

//     if (node.right) {
//       node.right.level = node.level + 1;
//       queue.push(node.right);
//     }
//   }

//   return res;
// };

// level을 별도로 저장하지 않는 방법
var largestValues = function (root) {
  if (!root) return [];

  let res = [];

  const queue = [root];

  while (queue.length) {
    let len = queue.length;
    let max;

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      max = typeof max === "number" ? Math.max(node.val, max) : node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    res.push(max);
  }

  return res;
};
