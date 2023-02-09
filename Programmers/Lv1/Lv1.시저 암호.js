function solution(s, n) {
  var answer = "";
  let upper = [];
  let lower = [];

  for (let i = 0; i < 26; i++) {
    lower.push(String.fromCharCode(i + 97));
    upper.push(String.fromCharCode(i + 65));
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }

    if (s[i].toLowerCase() === s[i]) {
      let idx = lower.indexOf(s[i]) + n;
      while (idx > 25) {
        idx -= 26;
      }
      answer += lower[idx];
    } else {
      let idx = upper.indexOf(s[i]) + n;
      while (idx > 25) {
        idx -= 26;
      }
      answer += upper[idx];
    }
  }

  return answer;
}
