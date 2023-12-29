var minCost = function (colors, neededTime) {
  let res = 0;
  let isSame = false;
  let subArr = [];

  for (let i = 0; i < colors.length; i++) {
    if (!isSame && i < colors.length - 1 && colors[i] === colors[i + 1]) isSame = true;
    if (isSame) subArr.push(neededTime[i]);

    if (isSame && i < colors.length - 1 && colors[i] !== colors[i + 1]) {
      isSame = false;
      subArr.sort((a, b) => a - b);

      for (let j = 0; j < subArr.length - 1; j++) {
        res += subArr[j];
      }

      subArr = [];
    }
  }

  if (subArr.length) {
    subArr.sort((a, b) => a - b);
    for (let i = 0; i < subArr.length - 1; i++) {
      res += subArr[i];
    }
  }

  return res;
};
