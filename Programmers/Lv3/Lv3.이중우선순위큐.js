function solution(operations) {
  var answer = [];
  operations = operations.map((el) => el.split(" "));

  for (let i = 0; i < operations.length; i++) {
    let cur = operations[i];

    if (cur[0] === "I") {
      answer.push(cur[1]);
    } else {
      if (!answer.length) continue;

      if (+cur[1] === 1) answer.sort((a, b) => +a - +b).pop();
      else answer.sort((a, b) => +a - +b).shift();
    }
  }

  answer = answer.map((el) => +el);

  return answer.length ? [Math.max(...answer), Math.min(...answer)] : [0, 0];
}
