function solution(n, k) {
  return n
    .toString(k)
    .split("0")
    .filter((num) => isPrime(+num)).length;
}

function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
