function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    answer += divisorCounter(i, limit, power);
  }

  return answer;
}

function divisorCounter(n, limit, power) {
  let res = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      res += 1;
    }

    if (res > limit) {
      res = power;
      break;
    }
  }

  return res;
}
