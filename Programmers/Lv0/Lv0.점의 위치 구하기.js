function solution(dot) {
  const [x, y] = dot;
  let answer = x < 0 ? [2, 3] : [1, 4];

  return y > 0 ? answer[0] : answer[1];
}
