var maxCoins = function (piles) {
  piles.sort((a, b) => a - b);
  let res = 0;
  let left = 0;
  let right = piles.length - 2;

  while (left < right) {
    res += piles[right];

    right -= 2;
    left++;
  }

  return res;
};
