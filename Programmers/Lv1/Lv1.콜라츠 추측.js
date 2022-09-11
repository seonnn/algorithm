function solution(num) {
  let answer = 0;
  for (i = 0; i < 500; i++) {
    if (num % 2 === 0) {
      num = num / 2;
      answer += 1;
    } else if (num > 1 && num % 2 === 1) {
      num = num * 3 + 1;
      answer += 1;
    } else {
      break;
    }
  }

  if (answer === 500 && num !== 1) {
    answer = -1;
  }

  return answer;
}
