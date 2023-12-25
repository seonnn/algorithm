var isPathCrossing = function (path) {
  const set = new Set();
  const d = {
    N: [0, 1],
    E: [1, 0],
    S: [0, -1],
    W: [-1, 0],
  };

  let cur = [0, 0];
  set.add(cur.join(","));

  for (let i = 0; i < path.length; i++) {
    cur[0] += d[path[i]][0];
    cur[1] += d[path[i]][1];

    if (set.has(cur.join(","))) return true;
    set.add(cur.join(","));
  }

  return false;
};
