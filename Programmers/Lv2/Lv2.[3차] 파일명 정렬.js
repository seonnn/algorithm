function solution(files) {
  var answer = [];

  let temp = [];

  for (let i = 0; i < files.length; i++) {
    let cur = files[i];
    let head = "";
    for (let j = 0; j < cur.length; j++) {
      if (+cur[j] >= 0 && cur[j] !== " ") {
        temp.push([i, head, j]);
        break;
      }
      head += cur[j].toLowerCase();
    }
  }

  for (let i = 0; i < files.length; i++) {
    let cur = files[i];
    let number = "";
    for (let j = temp[i][2]; j < cur.length; j++) {
      if (+cur[j] >= 0 && cur[j] !== " ") {
        number += cur[j];

        if (j === cur.length - 1) {
          temp[i] = [...temp[i].slice(0, 2), +number];
        }
      } else {
        temp[i] = [...temp[i].slice(0, 2), +number];
        break;
      }
    }
  }

  temp.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    if (a[1] < b[1]) return -1;
    if (a[1] === b[1]) {
      return a[2] - b[2];
    }
  });

  for (let i = 0; i < temp.length; i++) {
    answer.push(files[temp[i][0]]);
  }

  return answer;
}
