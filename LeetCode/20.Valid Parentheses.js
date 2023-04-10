var isValid = function (s) {
  if (s.length % 2 === 1) return false;

  const regex = /[\{\[\(]/;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (regex.test(s[i])) {
      stack.push(s[i]);
      continue;
    }

    if (s[i] === "]" && stack.at(-1) === "[") stack.pop();
    else if (s[i] === "}" && stack.at(-1) === "{") stack.pop();
    else if (s[i] === ")" && stack.at(-1) === "(") stack.pop();
    else return false;
  }

  return stack.length ? false : true;
};
