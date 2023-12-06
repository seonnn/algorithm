var numberOfMatches = function (n) {
  let res = 0;
  while (n > 1) {
    res += Math.floor(n / 2);
    n = Math.ceil(n / 2);
  }

  return res;
};
