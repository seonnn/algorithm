function solution(arr) {
  let answer = [];
  let min = Math.min(...arr);
  if (arr.length === 1) {
    answer.push(-1);
  } else {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] !== min) {
        answer.push(arr[i]);
      }
    }
  }
  return answer;
}
