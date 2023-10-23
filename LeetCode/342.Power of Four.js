var isPowerOfFour = function (n) {
  while (n >= 4) {
    n /= 4;
  }

  return n === 1;
};
