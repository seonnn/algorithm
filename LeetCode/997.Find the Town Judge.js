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

// 풀이 추가(시간복잡도 개선)
var findJudge = function (n, trust) {
  if (n === 1 && trust.length === 0) return 1;

  let arr = Array.from({ length: n + 1 }, () => []);
  let set = new Set();

  for (let i = 0; i < trust.length; i++) {
    let temp = trust[i];

    if (!arr[temp[1]][0]) arr[temp[1]].push(temp[1]);

    arr[temp[1]].push(temp[0]);
    set.add(temp[0]);
  }

  let judge = arr.filter((el) => el.length === n);

  if (!judge.length) return -1;

  return set.has(judge[0][0]) ? -1 : judge[0][0];
};
