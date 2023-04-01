function solution(name, yearning, photo) {
  let answer = [];
  let nameObj = {};

  for (let i = 0; i < name.length; i++) {
    nameObj[name[i]] = yearning[i];
  }

  for (let i = 0; i < photo.length; i++) {
    let score = 0;
    for (let j = 0; j < photo[i].length; j++) {
      if (nameObj[photo[i][j]]) score += nameObj[photo[i][j]];
    }
    answer.push(score);
  }

  return answer;
}
