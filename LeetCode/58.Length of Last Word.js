var lengthOfLastWord = function (s) {
  let word = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (word.length > 0 && s[i] === " ") break;

    if (s[i] !== " ") word += s[i];
  }

  return word.length;
};
