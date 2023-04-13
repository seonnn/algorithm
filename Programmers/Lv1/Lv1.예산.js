function solution(d, budget) {
  d.sort((a, b) => a - b);
  let sum = 0;
  let idx = 0;

  while (idx < d.length) {
    sum += d[idx];

    if (sum > budget) break;

    idx++;
  }

  return idx;
}
