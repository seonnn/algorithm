var countPalindromicSubsequence = function (s) {
  let set = new Set();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < alphabet.length; i++) {
    const idx = s.indexOf(alphabet[i]);
    const lIdx = s.lastIndexOf(alphabet[i]);

    if (lIdx - idx > 1) {
      for (let j = idx + 1; j < lIdx; j++) {
        set.add(s[idx] + s[j] + s[lIdx]);
      }
    }
  }

  return set.size;
};
