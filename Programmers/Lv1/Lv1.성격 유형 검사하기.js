function solution(survey, choices) {
  let result = "";
  let resultPoints = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  let typePoints = [3, 2, 1, 0, 1, 2, 3];

  for (let i = 0; i < choices.length; i++) {
    let front = survey[i].split("")[0];
    let back = survey[i].split("")[1];

    if (choices[i] > 4) {
      resultPoints[back] += typePoints[choices[i] - 1];
    } else if (choices[i] > 0 && choices[i] < 4) {
      resultPoints[front] += typePoints[choices[i] - 1];
    }
  }

  let resultPointKeys = Object.keys(resultPoints);
  let resultPointVal = Object.values(resultPoints);

  for (let i = 0; i < 4; i++) {
    if (resultPointVal[i * 2] >= resultPointVal[i * 2 + 1])
      result += resultPointKeys[i * 2];
    else result += resultPointKeys[i * 2 + 1];
  }

  return result;
}
