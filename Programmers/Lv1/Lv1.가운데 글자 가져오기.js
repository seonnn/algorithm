function solution(s) {
  var idx = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s[idx - 1] + s[idx] : s[idx];
}
