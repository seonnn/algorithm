// bfs
var addOneRow = function (root, val, depth) {
  // depth가 1인 경우 root를 TreeNode의 left로 설정하여 return
  if (depth === 1) return new TreeNode(val, root, null);

  let queue = [root];
  let dth = 1; // root의 depth는 1에서 시작하기 때문에 dth를 1로 할당

  while (queue.length > 0) {
    let length = queue.length; // 변수에 저장하지 않으면 length 속성이 변할 수 있기 때문에 변수에 저장!!

    for (let i = 0; i < length; i++) {
      let node = queue.shift();

      //   dth가 depth보다 1 작을 때 node의 left와 right에 val의 값을 가진 TreeNode 추가
      if (dth === depth - 1) {
        node.left = new TreeNode(val, node.left);
        node.right = new TreeNode(val, null, node.right);
      } else {
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }

    dth++;
  }

  return root;
};

// dfs
var addOneRow = function (root, val, depth) {
  if (depth === 1) return new TreeNode(val, root, null);

  function helper(node, dth) {
    if (!node) return;

    if (dth === depth - 1) {
      node.left = new TreeNode(val, node.left, null);
      node.right = new TreeNode(val, null, node.right);
    }

    if (node.left) helper(node.left, dth + 1);
    if (node.right) helper(node.right, dth + 1);
  }

  helper(root, 1);

  return root;
};
