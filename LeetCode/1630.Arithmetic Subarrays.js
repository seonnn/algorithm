var checkArithmeticSubarrays = function (nums, l, r) {
  let res = [];

  for (let i = 0; i < l.length; i++) {
    let subArray = nums.slice(l[i], r[i] + 1);
    subArray.sort((a, b) => a - b);
    const gap = subArray[1] - subArray[0];
    for (let j = 0; j < subArray.length - 1; j++) {
      if (subArray[j + 1] - subArray[j] !== gap) {
        res.push(false);
        break;
      }

      if (j === subArray.length - 2) res.push(true);
    }
  }

  return res;
};
