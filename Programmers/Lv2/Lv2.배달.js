function solution(N, road, K) {
  var answer = 0;
  const graph = {};

  for (let i = 0; i < road.length; i++) {
    let [n1, n2, len] = road[i];
    if (!graph[n1]) graph[n1] = [];
    if (!graph[n2]) graph[n2] = [];
    graph[n1].push([n2, len]);
    graph[n2].push([n1, len]);
  }

  const visited = Array(N + 1).fill(-1);

  const queue = [...graph["1"]];
  visited[1] = 0;

  while (queue.length) {
    const [node, len] = queue.shift();

    visited[node] = visited[node] === -1 ? len : Math.min(len, visited[node]);

    let nextNodes = graph[String(node)];
    for (let i = 0; i < nextNodes.length; i++) {
      const [n, l] = nextNodes[i];

      if (visited[n] === -1 || l + len < visited[n]) queue.push([n, l + len]);
    }
  }
  return visited.filter((num) => num <= K).length - 1;
}
