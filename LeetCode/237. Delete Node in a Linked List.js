var deleteNode = function (node) {
  let temp = node;

  temp.val = temp.next.val;
  temp.next = temp.next.next;
};
