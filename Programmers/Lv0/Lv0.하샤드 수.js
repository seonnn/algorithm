function solution(x) {
  let sum = String(x)
    .split("")
    .reduce((acc, cur) => +acc + +cur, 0);

  return x % sum === 0;
}
