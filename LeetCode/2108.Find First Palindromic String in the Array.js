var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < Math.ceil(words[i].length / 2); j++) {
      if (words[i][j] !== words[i][words[i].length - j - 1]) break;
      if (j === Math.floor(words[i].length / 2) || words[i].length - j - 1 - j === 1) return words[i];
    }
  }

  return "";
};
