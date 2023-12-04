var largestGoodInteger = function (num) {
  let max = "";
  let cur = "";

  for (let i = 0; i < num.length; i++) {
    if (cur.length === 0) {
      cur += num[i];
      continue;
    }

    cur = cur.at(-1) === num[i] ? cur + num[i] : num[i];

    if (cur.length === 3) {
      max = max.length === 0 ? cur : String(Math.max(+max, +cur));
      cur = "";
    }
  }

  return max === "0" ? "000" : max;
};
