var validateStackSequences = function (pushed, popped) {
  let add = 0;
  let rmv = 0;
  let newArr = [];

  while (add < pushed.length || rmv < popped.length) {
    if (newArr.at(-1) === popped[rmv]) {
      newArr.pop();
      rmv++;
      continue;
    }

    if (pushed[add] >= 0 && newArr.at(-1) !== popped[rmv]) {
      newArr.push(pushed[add]);
      add++;
      continue;
    }

    return false;
  }

  return true;
};
