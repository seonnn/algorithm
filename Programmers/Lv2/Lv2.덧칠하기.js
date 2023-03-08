function solution(n, m, section) {
  var answer = 1;
  let start = section.pop();
  while (section.length) {
    if (section.at(-1) >= start - m + 1) {
      section.pop();
    } else {
      answer++;
      start = section.pop();
    }
  }

  return answer;
}
