var oddEvenList = function (head) {
  if (!head) return head;

  let temp = head;
  let num = 1;

  let odd = [];
  let even = [];

  while (temp) {
    if (num % 2 === 1) odd.push(temp.val);
    else even.push(temp.val);

    num++;
    temp = temp.next;
  }

  let newArr = odd.concat(even);
  let result = new ListNode(newArr[0]);
  let temp2 = result;

  for (let i = 1; i < newArr.length; i++) {
    temp2.next = new ListNode(newArr[i]);
    temp2 = temp2.next;
  }

  return result;
};
