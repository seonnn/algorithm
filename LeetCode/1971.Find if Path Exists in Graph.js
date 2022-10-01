// 풀이 1
var validPath = function (n, edges, source, destination) {
  let graph = Array.from({ length: n }, () => []);
  let visited = new Array(n).fill(false);
  let queue = [];

  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].push(edges[i][1]);
    graph[edges[i][1]].push(edges[i][0]);
  }

  function helper(src, dest) {
    visited[src] = true;
    queue.pop();

    if (graph[src].includes(dest) || src === dest) return true;

    for (let i = 0; i < graph[src].length; i++) {
      if (!visited[graph[src][i]]) queue.push(graph[src][i]);
    }

    return queue.length > 0 ? helper(queue[queue.length - 1], dest) : false;
  }

  return helper(source, destination);
};

// 풀이 2
var validPath = function (n, edges, source, destination) {
  let graph = Array.from({ length: n }, () => []);

  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].push(edges[i][1]);
    graph[edges[i][1]].push(edges[i][0]);
  }

  let visited = new Array(n).fill(false);
  let queue = [source];

  while (queue.length > 0) {
    const curNode = queue.shift();
    visited[curNode] = true;
    if (graph[curNode].includes(destination) || source === destination)
      return true;

    graph[curNode].forEach((el) => {
      if (!visited[el]) {
        queue.push(el);
      }
    });
  }

  return false;
};
