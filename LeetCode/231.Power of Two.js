var isPowerOfTwo = function (n) {
  if ((n !== 1 && n % 2 === 1) || n < 1) {
    return false;
  }

  if (n === 1) {
    return true;
  }

  return isPowerOfTwo(n / 2);
};
