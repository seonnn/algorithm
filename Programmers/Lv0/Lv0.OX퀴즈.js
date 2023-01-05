function solution(quiz) {
  return quiz.map((s) => calculate(s));
}

function calculate(string) {
  let arr = string.split(" ");
  let result;

  switch (arr[1]) {
    case "+":
      result = +arr[0] + +arr[2];
      break;

    case "-":
      result = +arr[0] - +arr[2];
  }

  return result === +arr[4] ? "O" : "X";
}
