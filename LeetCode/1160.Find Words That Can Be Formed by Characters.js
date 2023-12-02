var countCharacters = function (words, chars) {
  let element = {};
  let res = 0;
  for (let i = 0; i < chars.length; i++) {
    if (!element[chars[i]]) element[chars[i]] = 0;
    element[chars[i]]++;
  }

  for (let i = 0; i < words.length; i++) {
    let copiedElement = { ...element };

    for (let j = 0; j < words[i].length; j++) {
      if (!copiedElement[words[i][j]]) break;

      copiedElement[words[i][j]] -= 1;
      if (copiedElement[words[i][j]] === 0) delete copiedElement[words[i][j]];

      if (j === words[i].length - 1) res += words[i].length;
    }
  }

  return res;
};
