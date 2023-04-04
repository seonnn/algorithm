function solution(keymap, targets) {
  var answer = [];
  let pressCnt = {};

  for (let i = 0; i < keymap.length; i++) {
    for (let j = 0; j < keymap[i].length; j++) {
      if (!pressCnt[keymap[i][j]] || pressCnt[keymap[i][j]] > j + 1) pressCnt[keymap[i][j]] = j + 1;
    }
  }

  for (let i = 0; i < targets.length; i++) {
    let cnt = 0;
    for (let j = 0; j < targets[i].length; j++) {
      if (!pressCnt[targets[i][j]]) {
        cnt = -1;
        break;
      }
      cnt += pressCnt[targets[i][j]];
    }
    answer.push(cnt);
  }

  return answer;
}
