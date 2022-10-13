function solution(numbers) {
  let sum = numbers.reduce((acc, cur) => acc + cur);

  return 45 - sum;
}
