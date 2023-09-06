var hasCycle = function (head) {
  let node1 = head;
  let node2 = head;

  while (node1 && node2.next) {
    node1 = node1.next;
    node2 = node2.next.next;

    if (!node1 || !node2) break;
    if (node1 === node2) return true;
  }

  return false;
};
