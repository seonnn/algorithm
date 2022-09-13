function solution(n) {
  var answer = 0;
  let sqrt = Math.sqrt(n);

  return sqrt - Math.floor(sqrt) === 0 ? Math.pow(sqrt + 1, 2) : -1;
}
