function solution(s) {
  let stack = [];

  for (let i = s.length - 1; i >= 0; i--) {
    if (stack.at(-1) === s[i]) stack.pop();
    else stack.push(s[i]);
  }

  return stack.length === 0 ? 1 : 0;
}
