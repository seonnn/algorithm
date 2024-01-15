var isSubsequence = function (s, t) {
  if (s.length < 1) return true;

  let p = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[p]) p++;
    if (p === s.length) return true;
  }

  return false;
};
