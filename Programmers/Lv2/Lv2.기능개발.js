function solution(progresses, speeds) {
  var answer = [];
  let temp = [];

  for (let i = 0; i < progresses.length; i++) {
    temp.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let idx = 0;
  let pointer = 0;

  while (idx < temp.length) {
    if (pointer === idx) {
      answer.push(1);
      idx++;
      continue;
    }

    if (temp[pointer] >= temp[idx]) {
      answer[answer.length - 1] += 1;
      idx++;
    } else {
      pointer = idx;
    }
  }

  return answer;
}
