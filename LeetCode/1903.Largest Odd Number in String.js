var largestOddNumber = function (num) {
  let idx = -1;
  for (let i = num.length - 1; i >= 0; i--) {
    if (+num[i] % 2 === 1) {
      idx = i;
      break;
    }
  }

  let res = "";
  if (idx > -1) {
    for (let i = 0; i <= idx; i++) {
      res += num[i];
    }
  }

  return res;
};
