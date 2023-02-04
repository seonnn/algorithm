function solution(money) {
  let max = Math.floor(money / 5500);
  return [max, money - max * 5500];
}
