var findJudge = function (n, trust) {
  let graph = Array.from({ length: n + 1 }, () => []);

  for (let i = 0; i < trust.length; i++) {
    let [from, to] = trust[i];
    graph[from].push(to);
  }

  let candidate = graph.map((el, idx) => {
    if (el.length === 0) return idx;
  });

  for (let i = 0; i < candidate.length; i++) {
    if (candidate[i]) {
      for (let j = 1; j < graph.length; j++) {
        console.log(graph[j], i);
        if (j !== i && !graph[j].includes(i)) break;
        else if (j === graph.length - 1) return candidate[i];
      }
    }
  }

  return -1;
};
