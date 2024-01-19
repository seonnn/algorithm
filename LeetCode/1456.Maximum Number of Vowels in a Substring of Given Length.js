var maxVowels = function (s, k) {
  const set = new Set(["a", "e", "i", "o", "u"]);

  let cur = 0;

  for (let i = 0; i < k; i++) {
    if (set.has(s[i])) cur++;
  }

  let max = cur;

  for (let i = 1; i <= s.length - k; i++) {
    if (set.has(s[i - 1])) cur--;
    if (set.has(s[i + k - 1])) cur++;

    max = Math.max(max, cur);

    if (max === k) return k;
  }

  return max;
};
