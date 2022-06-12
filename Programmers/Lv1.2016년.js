function solution(a, b) {
  var answer = "";
  let monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dayArr = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let dayCount = 0;

  for (let i = 0; i < a - 1; i++) {
    dayCount += monthArr[i];
  }
  dayCount += b;

  answer = dayArr[dayCount % 7];

  return answer;
}
