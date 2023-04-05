function solution(k, m, score) {
  var answer = 0;
  let boxCnt = Math.floor(score.length / m);
  score.sort((a, b) => a - b);

  for (let i = 0; i < boxCnt; i++) {
    for (let j = 0; j < m; j++) {
      if (j === m - 1) {
        answer += score.pop() * m;
        break;
      }
      score.pop();
    }
  }

  return answer;
}
