var canPlaceFlowers = function (flowerbed, n) {
  if (flowerbed.length === 1 && flowerbed[0] === 0 && n === 1) return true;

  let cnt = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (i === 0) {
      if (flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
        cnt++;
        flowerbed[i] = 1;
      }
    } else if (i > 0 && i < flowerbed.length - 1) {
      if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
        flowerbed[i] = 1;
        cnt++;
      }
    } else {
      if (flowerbed[i - 1] === 0 && flowerbed[i] === 0) {
        flowerbed[i] = 1;
        cnt++;
      }
    }
  }

  return cnt >= n;
};
