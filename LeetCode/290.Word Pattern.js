var wordPattern = function (pattern, s) {
  let obj = {};
  let set = new Set();

  pattern = pattern.split("");
  s = s.split(" ");

  if (pattern.length !== s.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (!obj[pattern[i]] && !set.has(s[i])) {
      obj[pattern[i]] = s[i];
      set.add(s[i]);
    }

    if (obj[pattern[i]] === s[i]) continue;
    else return false;
  }

  return true;
};
