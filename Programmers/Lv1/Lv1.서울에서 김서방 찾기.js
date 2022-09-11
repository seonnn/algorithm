function solution(seoul) {
  var answer = "";
  let idx = seoul.findIndex((el) => el === "Kim");
  answer = `김서방은 ${idx}에 있다`;

  return answer;
}
