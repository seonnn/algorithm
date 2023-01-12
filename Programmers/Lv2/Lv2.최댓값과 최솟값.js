function solution(s) {
  s = s.split(" ").map((el) => +el);

  return `${Math.min(...s)} ${Math.max(...s)}`;
}
