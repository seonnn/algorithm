function solution(s) {
  var answer = 0;
  let x = "";
  let others = "";

  for (let i = 0; i < s.length; i++) {
    if (!x.length) {
      x = s[i];
      continue;
    }

    if (x[0] === s[i]) x += s[i];
    else others += s[i];

    if (x.length === others.length) {
      answer += 1;
      x = "";
      others = "";
    }
  }

  return x.length || others.length ? answer + 1 : answer;
}
