var buildArray = function (target, n) {
  let pointer = 0;
  let cur = 1;
  let copy = [];
  let res = [];

  while (pointer < target.length) {
    copy.push(cur);
    res.push("Push");
    cur++;

    if (target[pointer] === copy.at(-1)) {
      pointer++;
    } else {
      copy.pop();
      res.push("Pop");
    }
  }

  return res;
};
