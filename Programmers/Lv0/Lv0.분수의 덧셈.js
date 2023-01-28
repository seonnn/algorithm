function solution(numer1, denom1, numer2, denom2) {
  let numer = numer1 * denom2 + denom1 * numer2;
  let denom = denom1 * denom2;
  let n = 2;

  while (n <= Math.max(numer, denom)) {
    if (numer % n === 0 && denom % n === 0) {
      numer /= n;
      denom /= n;
    } else n++;
  }

  return [numer, denom];
}
