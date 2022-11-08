// 재귀
var makeGood = function (s) {
  for (i = 0; i < s.length; i++) {
    if (Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)) === 32) {
      s = s.replace(s[i] + s[i + 1], "");
      return makeGood(s);
    }
  }

  return s;
};

// stack
var makeGood = function (s) {
  let stack = [];

  for (i = 0; i < s.length; i++) {
    if (
      stack.length &&
      Math.abs(s.charCodeAt(i) - stack.at(-1).charCodeAt()) === 32
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
};
