class Graph {
  constructor(n, edges) {
    this.graph = {};

    for (let i = 0; i < n; i++) {
      this.graph[i] = [];
    }

    for (let i = 0; i < edges.length; i++) {
      this.graph[edges[i][0]].push([edges[i][1], edges[i][2]]);
    }
  }
}

/**
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function (edge) {
  this.graph[edge[0]].push([edge[1], edge[2]]);
  return null;
};

/**
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
Graph.prototype.shortestPath = function (node1, node2) {
  let queue = [];
  let minCosts = {};
  let min = Number.MAX_SAFE_INTEGER;

  queue.push({ n: node1, d: 0 });

  while (queue.length) {
    let node = queue.shift();

    if (minCosts[node.n] === undefined || node.d < minCosts[node.n]) minCosts[node.n] = node.d;
    else continue;

    if (node.n === node2) {
      min = Math.min(min, node.d);
    }

    for (let i = 0; i < this.graph[node.n].length; i++) {
      if (
        minCosts[this.graph[node.n][i][0]] === undefined ||
        node.d + this.graph[node.n][i][1] < minCosts[this.graph[node.n][i][0]]
      ) {
        queue.push({ n: this.graph[node.n][i][0], d: node.d + this.graph[node.n][i][1] });
      }
    }
  }

  return min === Number.MAX_SAFE_INTEGER ? -1 : min;
};
