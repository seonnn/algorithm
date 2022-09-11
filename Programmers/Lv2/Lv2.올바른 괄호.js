function solution(s) {
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[0] === ")") {
      return false;
    }

    if (s[i] === "(") {
      arr.push("(");
    } else {
      arr.pop();
    }
  }

  return arr.length === 0 ? true : false;
}
