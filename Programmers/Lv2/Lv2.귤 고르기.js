function solution(k, tangerine) {
  var answer = 0;
  let map = new Map();

  for (let i = 0; i < tangerine.length; i++) {
    let temp = tangerine[i];
    if (!map.get(temp)) map.set(temp, 0);
    map.set(temp, map.get(temp) + 1);

    if (map.get(temp) >= k) return 1;
  }

  let arr = [...map].sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < arr.length; i++) {
    k -= arr[i][1];
    answer += 1;

    if (k <= 0) break;
  }

  return answer;
}
