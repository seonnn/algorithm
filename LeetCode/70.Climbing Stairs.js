var climbStairs = function (n) {
  if (n <= 2) return n;

  let cases = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    cases.push(cases[i - 1] + cases[i - 2]);
  }

  return cases[n];
};
