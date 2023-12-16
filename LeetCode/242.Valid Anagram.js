var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let obj = {};

  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) obj[s[i]] = [0, 0];
    if (!obj[t[i]]) obj[t[i]] = [0, 0];

    obj[s[i]][0] += 1;
    obj[t[i]][1] += 1;
  }

  for (let key in obj) {
    if (obj[key][0] !== obj[key][1]) return false;
  }

  return true;
};
