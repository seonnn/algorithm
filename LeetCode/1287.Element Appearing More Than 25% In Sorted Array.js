var findSpecialInteger = function (arr) {
  let maxLen = 0;
  let res = null;
  let curLen = 1;
  let curNum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === curNum) curLen++;
    else {
      if (maxLen < curLen) {
        maxLen = curLen;
        res = curNum;
      }
      curNum = arr[i];
      curLen = 1;
    }
  }

  return typeof res !== "number" || maxLen < curLen ? curNum : res;
};
