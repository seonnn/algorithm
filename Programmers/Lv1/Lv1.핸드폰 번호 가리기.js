function solution(phone_number) {
  let answer = "";

  for (i = 0; i < phone_number.length - 4; i++) {
    answer += "*";
  }
  answer += phone_number.slice(phone_number.length - 4);

  return answer;
}
