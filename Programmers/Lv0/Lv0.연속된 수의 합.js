function solution(num, total) {
  var answer = [];
  let mid = Math.floor(total / num);
  let assist = 1;
  let sum = mid;

  answer.push(mid);

  while (answer.length < num) {
    answer.unshift(mid - assist);
    answer.push(mid + assist);
    sum += mid * 2;
    assist++;
  }

  while (sum !== total) {
    sum -= answer[0];
    answer.shift();
  }

  return answer;
}
