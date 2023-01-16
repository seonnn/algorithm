function solution(expression) {
  var answer = [];
  let numbers = expression.replace(/[*+-]/g, " ").split(" ");
  let operators = [];
  let idx = 0;

  for (let i = 0; i < numbers.length - 1; i++) {
    idx += numbers[i].length;
    operators.push(expression[idx]);
    idx += 1;
  }

  let priority = [
    ["+", "*", "-"],
    ["+", "-", "*"],
    ["*", "-", "+"],
    ["*", "+", "-"],
    ["-", "*", "+"],
    ["-", "+", "*"],
  ];

  for (let i = 0; i < priority.length; i++) {
    answer.push(getAmount([...numbers], [...operators], priority[i]));
  }

  return Math.max(...answer);
}

function getAmount(n, o, arr) {
  for (let i = 0; i < arr.length; i++) {
    while (o.length) {
      let idx = o.indexOf(arr[i]);
      let res = 0;
      if (idx === -1) break;

      if (o[idx] === "+") res = +n[idx] + +n[idx + 1];
      else if (o[idx] === "-") res = +n[idx] - +n[idx + 1];
      if (o[idx] === "*") res = +n[idx] * +n[idx + 1];

      o.splice(idx, 1);
      n.splice(idx, 2, res);
    }
  }

  return Math.abs(n[0]);
}
