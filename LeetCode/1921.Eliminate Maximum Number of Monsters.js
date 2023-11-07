var eliminateMaximum = function (dist, speed) {
  let arrival = dist.map((d, idx) => d / speed[idx]).sort((a, b) => a - b);
  let res = 0;

  for (let i = 0; i < arrival.length; i++) {
    if (i < arrival[i]) res++;
    else break;
  }

  return res;
};
