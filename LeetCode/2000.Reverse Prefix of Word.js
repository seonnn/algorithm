var reversePrefix = function (word, ch) {
  let idx = word.indexOf(ch);

  if (idx < 0) return word;

  let pre = "";
  let post = "";
  let idx2 = idx + 1;

  while (word[idx] || word[idx2]) {
    if (word[idx]) pre += word[idx];
    if (word[idx2]) post += word[idx2];

    idx--;
    idx2++;
  }

  return pre + post;
};
