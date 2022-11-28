function solution(p) {
  let left = 0;
  let right = 0;

  if (!p.length) return "";

  for (i in p) {
    if (p[i] === "(") left++;
    else right++;

    if (left === right) {
      let u = p.slice(0, +i + 1);
      let v = p.slice(+i + 1);

      if (isBalanced(u)) {
        return u + solution(v);
      } else {
        let answer = "(" + solution(v) + ")";

        for (let j = 1; j < u.length - 1; j++) {
          answer += p[j] === "(" ? ")" : "(";
        }

        return answer;
      }
    }
  }
}

function isBalanced(str) {
  let stack = [];

  for (i in str) {
    if (str[i] === "(") stack.push(str[i]);
    else {
      if (!stack.length) return false;
      stack.pop();
    }
  }

  return true;
}
