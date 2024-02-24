var frequencySort = function (s) {
  let strs = new Map();
  for (i in s) {
    if (!strs.get(s[i])) strs.set(s[i], 0);
    strs.set(s[i], strs.get(s[i]) + 1);
  }

  let sortedStrs = [...strs].sort((a, b) => b[1] - a[1]);
  let result = "";

  for (let i = 0; i < sortedStrs.length; i++) {
    for (let j = 0; j < sortedStrs[i][1]; j++) {
      result += sortedStrs[i][0];
    }
  }

  return result;
};

// 풀이 리팩토링(고차함수 사용)
var frequencySort = function (s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) map.set(s[i], 0);
    map.set(s[i], map.get(s[i]) + 1);
  }

  const arr = [...map].sort((a, b) => b[1] - a[1] || (b[1] === a[1] && a[0] - b[0]));

  return arr.reduce((acc, cur) => acc + cur[0].repeat(cur[1]), "");
};
