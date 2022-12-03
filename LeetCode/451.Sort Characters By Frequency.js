var frequencySort = function (s) {
  let strs = new Map();
  for (i in s) {
    if (!strs.get(s[i])) strs.set(s[i], 0);
    strs.set(s[i], strs.get(s[i]) + 1);
  }

  let sortedStrs = [...strs].sort((a, b) => b[1] - a[1]);
  let result = "";

  for (let i = 0; i < sortedStrs.length; i++) {
    for (let j = 0; j < sortedStrs[i][1]; j++) {
      result += sortedStrs[i][0];
    }
  }

  return result;
};
