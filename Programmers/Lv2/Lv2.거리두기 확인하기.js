function solution(places) {
  var answer = [];

  for (let i = 0; i < places.length; i++) {
    let ans = 1;
    for (let j = 0; j < places[0].length; j++) {
      for (let k = 0; k < places[0][0].length; k++) {
        if (places[i][j][k] === "P") {
          // 상하좌우
          if (j + 1 < 5 && places[i][j + 1][k] === "P") {
            ans = 0;
            break;
          }
          if (j + 2 < 5 && places[i][j + 2][k] === "P" && places[i][j + 1][k] !== "X") {
            ans = 0;
            break;
          }
          if (k + 1 < 5 && places[i][j][k + 1] === "P") {
            ans = 0;
            break;
          }
          if (k + 2 < 5 && places[i][j][k + 2] === "P" && places[i][j][k + 1] !== "X") {
            ans = 0;
            break;
          }
          // 대각선
          if (j - 1 >= 0 && k + 1 < 5 && places[i][j - 1][k + 1] === "P") {
            if (places[i][j][k + 1] !== "X" || places[i][j - 1][k] !== "X") {
              ans = 0;
              break;
            }
          }
          if (j + 1 < 5 && k + 1 < 5 && places[i][j + 1][k + 1] === "P") {
            if (places[i][j][k + 1] !== "X" || places[i][j + 1][k] !== "X") {
              ans = 0;
              break;
            }
          }
        }
      }
      if (ans === 0) break;
    }
    answer.push(ans);
  }
  return answer;
}
