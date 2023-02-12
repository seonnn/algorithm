var isAlienSorted = function (words, order) {
  let dic = {};
  for (let i = 0; i < order.length; i++) {
    dic[order[i]] = i;
  }

  for (let i = 0; i < words.length - 1; i++) {
    let cur = words[i];
    let next = words[i + 1];

    for (let j = 0; j < cur.length; j++) {
      if (next[j] && dic[cur[j]] < dic[next[j]]) break;

      if (next[j] && dic[cur[j]] > dic[next[j]]) return false;

      if (cur[j] && !next[j]) return false;
    }
  }

  return true;
};
