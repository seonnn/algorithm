var removeDuplicates = function (s) {
  let stack = [];

  for (el in s) {
    if (stack.at(-1) !== s[el]) {
      stack.push(s[el]);
    } else {
      stack.pop();
    }
  }

  return stack.join("");
};
