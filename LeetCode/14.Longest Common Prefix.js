var longestCommonPrefix = function (strs) {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let newPrefix = "";
    for (let j = 0; j < strs[i].length; j++) {
      if (strs[i][j] === prefix[j]) newPrefix += prefix[j];
      else break;
    }

    prefix = newPrefix;
  }

  return prefix;
};
