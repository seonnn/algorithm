var sortVowels = function (s) {
  const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const vowels = [];

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) vowels.push(s[i]);
  }

  vowels.sort();
  let res = "";
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      res += vowels[cnt];
      cnt++;
    } else {
      res += s[i];
    }
  }

  return res;
};
