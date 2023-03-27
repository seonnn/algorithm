function solution(picks, minerals) {
  var answer = 0;
  let len = minerals.length % 5 === 0 ? minerals.length / 5 : Math.floor(minerals.length / 5) + 1;
  let arr = Array(len).fill(0);
  let arr2 = Array.from({ length: len }, () => Array(3).fill(0));
  let totalPicks = picks.reduce((acc, cur) => acc + cur, 0);

  for (let i = 0; i < minerals.length; i++) {
    let idx = Math.floor(i / 5);

    if (minerals[i] === "diamond") {
      arr[idx] += 25;
      arr2[idx][0] += 1;
    } else if (minerals[i] === "iron") {
      arr[idx] += 5;
      arr2[idx][1] += 1;
    } else {
      arr[idx] += 1;
      arr2[idx][2] += 1;
    }
  }

  arr = arr
    .slice(0, totalPicks)
    .map((el, idx) => [el, idx])
    .sort((a, b) => b[0] - a[0]);

  for (let i = 0; i < arr.length; i++) {
    let [d, ir, s] = arr2[arr[i][1]];
    if (picks[0]) {
      picks[0] -= 1;
      answer += d * 1;
      answer += ir * 1;
      answer += s * 1;
    } else if (picks[1]) {
      picks[1] -= 1;
      answer += d * 5;
      answer += ir * 1;
      answer += s * 1;
    } else {
      picks[2] -= 1;
      answer += d * 25;
      answer += ir * 5;
      answer += s * 1;
    }
  }

  return answer;
}
