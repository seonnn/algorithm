function solution(s) {
  var answer = 0;
  let lastIdx = s.length;
  s = s + s.slice(0, -1);

  let idx = 0;
  let stack = [];
  while (idx < lastIdx) {
    for (let i = 0; i < lastIdx; i++) {
      if (s[i + idx] === "{" || s[i + idx] === "[" || s[i + idx] === "(") stack.push(s[i + idx]);
      else if (s[i + idx] === "}" && stack.at(-1) === "{") stack.pop();
      else if (s[i + idx] === "]" && stack.at(-1) === "[") stack.pop();
      else if (s[i + idx] === ")" && stack.at(-1) === "(") stack.pop();
      else break;

      if (i === lastIdx - 1 && !stack.length) answer++;
    }

    stack = [];
    idx++;
  }

  return answer;
}
