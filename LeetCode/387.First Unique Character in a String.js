var firstUniqChar = function (s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) obj[s[i]] = 0;
    obj[s[i]] += 1;
  }

  let set = new Set();
  for (let key in obj) {
    if (obj[key] === 1) set.add(key);
  }

  if (set.size < 1) return -1;

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) return i;
  }
};
