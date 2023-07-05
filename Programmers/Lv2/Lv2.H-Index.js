function solution(citations) {
  var answer = 0;
  let count = Array(citations.length + 1).fill(0);

  for (let i = 0; i < citations.length; i++) {
    let max = citations[i] > count.length - 1 ? count.length - 1 : citations[i];
    for (let j = 0; j <= max; j++) {
      count[j] += 1;
    }
  }

  for (let i = count.length - 1; i >= 0; i--) {
    if (i <= count[i]) {
      answer = i;
      break;
    }
  }

  return answer;
}
