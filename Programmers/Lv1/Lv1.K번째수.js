function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    let [start, end, target] = commands[i];

    answer.push(array.slice(start - 1, end).sort((a, b) => a - b)[target - 1]);
  }

  return answer;
}
