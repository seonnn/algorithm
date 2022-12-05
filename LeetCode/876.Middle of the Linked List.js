var middleNode = function (head) {
  let temp = head;
  let size = 0;

  while (temp) {
    size++;
    temp = temp.next;
  }

  let mid = Math.floor(size / 2);
  let cnt = 0;
  let newTemp = head;

  while (newTemp) {
    if (cnt === mid) break;

    cnt++;
    newTemp = newTemp.next;
  }

  return newTemp;
};
