function solution(n) {
  let fibonacci = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibonacci.push((fibonacci[i - 2] + fibonacci[i - 1]) % 1234567);
  }

  return fibonacci[n];
}
