function solution(answers) {
  var answer = [];
  let student1 = [1, 2, 3, 4, 5];
  let student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let answerCount = [];
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === student1[i % 5]) {
      count1 += 1;
    }
  }
  answerCount.push(count1);

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === student2[i % 8]) {
      count2 += 1;
    }
  }
  answerCount.push(count2);

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === student3[i % 10]) {
      count3 += 1;
    }
  }
  answerCount.push(count3);

  let max = Math.max(...answerCount);
  for (let i = 0; i < answerCount.length; i++) {
    if (answerCount[i] === max) {
      answer.push(i + 1);
    }
  }

  return answer;
}
