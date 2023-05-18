var findSmallestSetOfVertices = function (n, edges) {
  let connection = Array(n).fill(false);
  let result = [];

  for (let i = 0; i < edges.length; i++) {
    let [, e] = edges[i];
    connection[e] = true;
  }

  for (let i = 0; i < n; i++) {
    if (!connection[i]) result.push(i);
  }

  return result;
};
