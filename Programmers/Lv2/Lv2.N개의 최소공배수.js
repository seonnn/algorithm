function solution(arr) {
  return arr.reduce((acc, cur) => (acc * cur) / GCD(acc, cur));
}

function GCD(a, b) {
  [a, b] = a > b ? [a, b] : [b, a];

  while (b > 0) {
    let remain = a % b;
    a = b;
    b = remain;
  }

  return a;
}
