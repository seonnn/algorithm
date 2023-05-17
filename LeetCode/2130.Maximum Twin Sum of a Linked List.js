var pairSum = function (head) {
  let node = head;
  let values = [];

  while (node) {
    values.push(node.val);
    node = node.next;
  }

  let max = 0;

  for (let i = 0; i < values.length / 2; i++) {
    max = Math.max(values[i] + values[values.length - 1 - i], max);
  }

  return max;
};
