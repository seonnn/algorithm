function solution(n, t, m, p) {
  var answer = "";
  let targetNum = "";
  let curDecimal = 0;

  while (targetNum.length < t * m) {
    targetNum += curDecimal.toString(n);
    curDecimal++;
  }

  for (let i = p - 1; i < t * m; i += m) {
    answer += targetNum[i].toUpperCase();
  }

  return answer;
}
