var reverseVowels = function (s) {
  const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const vowels = [];

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) vowels.push(s[i]);
  }

  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      res += vowels.at(-1);
      vowels.pop();
    } else {
      res += s[i];
    }
  }

  return res;
};
