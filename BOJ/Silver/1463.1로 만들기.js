let input = require("fs").readFileSync("/dev/stdin").toString().trim();

input = +input;
// 연산 횟수를 memoize 하기 위해 0으로 채워진 input + 1 길이의 배열을 생성함
let memo = new Array(input + 1).fill(0);

for (let i = 2; i <= input; i++) {
  // 1을 빼는 경우: 직전 숫자의 연산 횟수에 1을 더해줌
  memo[i] = memo[i - 1] + 1;

  // 3으로 나눠지는 경우: 3으로 나눈 숫자의 연산 횟수에 1을 더해줌
  if (i % 3 === 0) memo[i] = Math.min(memo[i], memo[i / 3] + 1);

  // 2로 나눠지는 경우: 2로 나눈 숫자의 연산 횟수에 1을 더해줌
  if (i % 2 === 0) memo[i] = Math.min(memo[i], memo[i / 2] + 1);
}

console.log(memo[input]);
