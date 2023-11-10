var restoreArray = function (adjacentPairs) {
  let obj = {};

  for (let i = 0; i < adjacentPairs.length; i++) {
    if (!obj[adjacentPairs[i][0]]) obj[adjacentPairs[i][0]] = [];
    if (!obj[adjacentPairs[i][1]]) obj[adjacentPairs[i][1]] = [];

    obj[adjacentPairs[i][0]].push(adjacentPairs[i][1]);
    obj[adjacentPairs[i][1]].push(adjacentPairs[i][0]);
  }

  let start = null;
  let visited = {};

  for (let key in obj) {
    if (obj[key].length === 1 && start === null) {
      start = key;
    }

    visited[key] = false;
  }

  let res = [];
  let queue = [];

  queue.push(start);
  res.push(+start);

  while (queue.length) {
    let cur = queue.shift();
    visited[cur] = true;
    let [n1, n2] = obj[cur];

    if (!visited[n1] && typeof n1 === "number") {
      queue.push(n1);
      res.push(n1);
    }

    if (!visited[n2] && typeof n2 === "number") {
      queue.push(n2);
      res.push(n2);
    }
  }

  return res;
};
