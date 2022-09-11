function solution(N, stages) {
  var answer = [];
  let failRate = Array.from(Array(N + 1), () => Array(2).fill(0));

  for (let i = 0; i < stages.length; i++) {
    for (let j = 1; j < failRate.length; j++) {
      if (j < stages[i]) {
        failRate[j][1]++;
      } else if (stages[i] === j) {
        failRate[j][0]++;
        failRate[j][1]++;
      }
    }
  }

  for (let i = 0; i < failRate.length; i++) {
    failRate[i].push(i);
    failRate[i].push(failRate[i][0] / failRate[i][1]);
  }

  answer = failRate
    .slice(1)
    .sort((a, b) => b[3] - a[3])
    .map((el) => el[2]);

  return answer;
}
