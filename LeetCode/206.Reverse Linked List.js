var reverseList = function (head) {
  if (!head || !head.next) return head;

  let left = null;
  let mid = head;
  let right = mid.next;

  while (right) {
    mid.next = left;
    left = mid;
    mid = right;
    right = right.next;
  }

  mid.next = left;

  return mid;
};
