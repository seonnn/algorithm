function solution(n, s) {
  var answer = [];

  if (n > s) return [-1];

  if (n === s) return new Array(n).fill(1);

  let q = Math.floor(s / n);
  let r = s % n;

  for (let i = 0; i < n; i++) {
    if (n - i === r) {
      r--;
      answer.push(q + 1);
    } else answer.push(q);
  }

  return answer;
}
