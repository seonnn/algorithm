var isBipartite = function (graph) {
  // vertex 방향 모두 -1로 초기화
  let vertexSide = Array(graph.length).fill(-1);
  // 첫번째 vertex 방향 0으로 설정
  vertexSide[0] = 0;

  let queue = [];

  // edges를 포함하는 vertex만 queue에 push
  for (let i = 0; i < graph.length; i++) {
    if (graph[i].length) queue.push(i);
  }

  while (queue.length) {
    let temp = queue.shift();

    let edges = graph[temp];

    for (let i = 0; i < edges.length; i++) {
      // 만약 edges[i]에 해당하는 정점의 방향이 설정되지 않은 경우 temp에 해당하는 정점의 반대 방향으로 방향을 설정
      if (vertexSide[edges[i]] === -1) vertexSide[edges[i]] = 1 - vertexSide[temp];
      // 만약 edges[i]에 해당하는 정점의 방향 temp에 해당하는 정점 방향과 일치한다면 이분그래프가 아니기 때문에 false return
      else if (vertexSide[edges[i]] === vertexSide[temp]) return false;
    }
  }

  return true;
};
