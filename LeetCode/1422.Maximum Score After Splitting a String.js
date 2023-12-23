var maxScore = function (s) {
  let oneSum = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") oneSum += 1;
  }

  let zeroSum = 0;
  let res = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") zeroSum += 1;
    else oneSum -= 1;

    res = Math.max(res, zeroSum + oneSum);
  }

  return res;
};
