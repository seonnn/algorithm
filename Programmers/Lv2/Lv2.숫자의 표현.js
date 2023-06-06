function solution(n) {
  let answer = 0;

  if (n === 1) return 1;

  for (let i = 2; i <= Math.ceil(n / 2); i++) {
    if (
      i % 2 === 1 &&
      n / i === Math.floor(n / i) &&
      n / i - Math.floor(i / 2) > 0 &&
      n / i + Math.floor(i / 2) <= Math.ceil(n / 2)
    ) {
      answer += 1;
      continue;
    }

    if (
      i % 2 === 0 &&
      n / i - 0.5 === Math.floor(n / i) &&
      n / i - i / 2 + 0.5 > 0 &&
      n / i + i / 2 - 0.5 <= Math.ceil(n / 2)
    ) {
      answer += 1;
    }
  }

  return answer + 1;
}

// 효율성 실패
function solution(n) {
  let answer = 0;

  if (n === 1) return 1;

  for (let i = 1; i <= Math.ceil(n / 2); i++) {
    let sum = 0;
    let temp = i;
    while (sum < n) {
      sum += temp;
      if (sum === n) {
        answer++;
        break;
      }
      temp += 1;
    }
  }

  return answer + 1;
}
