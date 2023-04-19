function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => b - a);
  let idx = 0;

  while (people[idx]) {
    if (people[idx] + people.at(-1) <= limit) {
      people.pop();
      answer += 1;
      idx++;
    } else {
      answer += 1;
      idx++;
    }
  }

  return answer;
}
