var deleteMiddle = function (head) {
  let addIdx = head;
  let idx = 0;
  while (addIdx) {
    addIdx.idx = idx;
    idx++;
    addIdx = addIdx.next;
  }

  if (idx === 1) return head.next;

  let mid = Math.floor(idx / 2);
  let temp = head;
  while (temp) {
    if (temp.idx === mid - 1) {
      temp.next = temp.next.next;
      break;
    }
    temp = temp.next;
  }

  return head;
};
