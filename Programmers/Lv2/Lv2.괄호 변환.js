function solution(p) {
  var answer = "";

  while (p.length) {
    let idx = getIdx(p);
    let u = p
      .split("")
      .slice(0, idx + 1)
      .join("");
    let v = p
      .split("")
      .slice(idx + 1)
      .join("");

    if (isBalanced(u)) answer += u;
    else {
      answer += reverse(u);
    }

    p = v;
  }

  return answer;
}

function getIdx(str) {
  let pair = new Map();

  for (i in str) {
    if (pair.get(str[i])) pair.set(str[i], pair.get(str[i]) + 1);
    else pair.set(str[i], 1);

    if (pair.get("(") === pair.get(")")) return +i;
  }
}

function isBalanced(str) {
  let newStr = str.replace("()", "");

  if (!newStr) return true;

  if (newStr.includes("()")) return isBalanced(newStr);
  else return false;
}

function reverse(str) {
  let result = "";

  for (i in str) {
    if (i === 0) result += "(";
    else if (i === str.length - 1) result += ")";
    else result += str[i] === ")" ? "(" : ")";
  }

  return result;
}
