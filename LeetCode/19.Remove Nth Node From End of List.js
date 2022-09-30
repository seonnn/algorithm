var removeNthFromEnd = function (head, n) {
  let temp = head;
  let length = 0;

  while (temp) {
    temp.idx = length;
    length++;
    temp = temp.next;
  }

  let result = head;
  let temp2 = head;
  let idx = 0;

  while (temp2) {
    temp2.idx = idx;

    if (length === n) {
      return result.next;
    }

    if (temp2.idx === length - n - 1) {
      temp2.next = temp2.next.next;
      break;
    }

    idx++;
    temp2 = temp2.next;
  }

  return result;
};
