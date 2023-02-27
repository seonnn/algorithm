function solution(gems) {
  var answer = [];
  const set = new Set(gems);

  if (set.size === 1) return [1, 1];

  const map = new Map();

  let start = 0;

  for (let i = 0; i < gems.length; i++) {
    if (!map.get(gems[i])) map.set(gems[i], 0);
    map.set(gems[i], map.get(gems[i]) + 1);

    if (map.size === set.size) {
      answer.push([start + 1, i + 1, i - start]);

      while (start < i) {
        map.set(gems[start], map.get(gems[start]) - 1);
        if (map.get(gems[start]) === 0) map.delete(gems[start]);

        start++;
        if (gems[start] !== gems[start + 1]) {
          if (map.size === set.size) answer.push([start + 1, i + 1, i - start]);
          else break;
        }
      }
    }
  }

  answer.sort((a, b) => a[2] - b[2]);

  return [answer[0][0], answer[0][1]];
}
