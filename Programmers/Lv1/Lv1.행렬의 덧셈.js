function solution(arr1, arr2) {
  let answer = [[]];
  for (i = 0; i < arr1.length; i++) {
    let resultArr = [];
    if (i === 0) {
      for (j = 0; j < arr1[0].length; j++) {
        answer[0].push(arr1[0][j] + arr2[0][j]);
      }
    } else {
      for (j = 0; j < arr1[i].length; j++) {
        resultArr.push(arr1[i][j] + arr2[i][j]);
      }
      answer.push(resultArr);
    }
  }
  return answer;
}
