var getLastMoment = function (n, left, right) {
  const lMax = Math.max(...left);
  const rMin = Math.min(...right);

  return Math.max(lMax, n - rMin);
};
