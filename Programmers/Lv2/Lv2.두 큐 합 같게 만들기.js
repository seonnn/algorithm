function solution(queue1, queue2) {
  let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
  let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
  let totalSum = sum1 + sum2;

  if (totalSum % 2 === 1) return -1;

  let totalQ = queue1.concat(queue2);
  let mid = totalSum / 2;
  let cnt = 0;
  let idx1 = 0,
    idx2 = totalQ.length / 2;

  while (cnt < queue1.length * 3) {
    if (sum1 === sum2) return cnt;

    if (sum1 < mid) {
      sum1 += totalQ[idx2];
      sum2 -= totalQ[idx2];
      idx2++;
    } else if (sum2 < mid) {
      sum2 += totalQ[idx1];
      sum1 -= totalQ[idx1];
      idx1++;
    }

    cnt++;
  }

  return -1;
}
