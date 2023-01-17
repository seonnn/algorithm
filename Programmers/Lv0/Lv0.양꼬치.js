function solution(n, k) {
  let 서비스 = Math.floor(n / 10);
  return 12000 * n + 2000 * k - 서비스 * 2000;
}
