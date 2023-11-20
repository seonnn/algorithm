var garbageCollection = function (garbage, travel) {
  let cnt = { M: 0, P: 0, G: 0 };
  let notExist = { M: 0, P: 0, G: 0 };

  for (let i = 0; i < garbage.length; i++) {
    let isExist = { M: false, P: false, G: false };

    for (let j = 0; j < garbage[i].length; j++) {
      if (notExist[garbage[i][j]] > 0) {
        cnt[garbage[i][j]] += notExist[garbage[i][j]];
        notExist[garbage[i][j]] = 0;
      }

      if (isExist[garbage[i][j]] === false) {
        isExist[garbage[i][j]] = true;
        if (i > 0) cnt[garbage[i][j]] += travel[i - 1];
      }

      cnt[garbage[i][j]] += 1;
    }

    if (i > 0 && isExist["M"] === false) notExist["M"] += travel[i - 1];
    if (i > 0 && isExist["P"] === false) notExist["P"] += travel[i - 1];
    if (i > 0 && isExist["G"] === false) notExist["G"] += travel[i - 1];
  }

  return Object.values(cnt).reduce((acc, cur) => (acc += cur), 0);
};
