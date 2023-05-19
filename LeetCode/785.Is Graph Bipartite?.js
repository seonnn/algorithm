var isBipartite = function (graph) {
  let isVisited = Array(graph.length).fill(false);
  let vertexSide = Array(graph.length);
  let setA = new Set();
  let setB = new Set();

  let queue = [0];
  let side = "A";
  vertexSide[0] = "A";
  setA.add(0);

  while (queue.length) {
    let temp = queue.shift();
    let v = graph[temp];
    isVisited[temp] = true;

    for (let i = 0; i < v.length; i++) {
      if (!isVisited[v[i]]) queue.push(v[i]);

      if (side === "A") {
        if (setA.has(v[i])) return false;
        setB.add(v[i]);
        vertexSide[v[i]] = "B";
      } else {
        if (setB.has(v[i])) return false;
        setA.add(v[i]);
        vertexSide[v[i]] = "A";
      }
    }

    side = vertexSide[queue[0]] === "A" ? "A" : "B";
  }

  return true;
};
