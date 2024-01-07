var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let res = 0;
  let idx = 0;
  for (let i = 0; i < g.length; i++) {
    while (idx < s.length) {
      if (s[idx] >= g[i]) {
        res++;
        idx++;
        break;
      } else {
        idx++;
      }
    }
  }

  return res;
};
