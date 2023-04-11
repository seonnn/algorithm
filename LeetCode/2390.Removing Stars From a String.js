var removeStars = function (s) {
  let removeList = Array(s.length).fill(false);
  let len = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "*") {
      removeList[i] = true;
      len++;
      continue;
    }

    if (len) {
      removeList[i] = true;
      len--;
    }
  }

  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (!removeList[i]) answer += s[i];
  }

  return answer;
};

// return 시 reduce 사용하는 방법
var removeStars = function (s) {
  let removeList = Array(s.length).fill(false);
  let len = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "*") {
      removeList[i] = true;
      len++;
      continue;
    }

    if (len) {
      removeList[i] = true;
      len--;
    }
  }

  return s.split("").reduce((acc, cur, idx) => (removeList[idx] ? acc : acc + cur), "");
};
