function solution(msg) {
  var answer = [];
  let dic = {};
  let cnt = 0;

  for (let i = 65; i < 91; i++) {
    cnt++;
    dic[String.fromCharCode(i)] = [[String.fromCharCode(i), cnt]];
  }

  while (msg.length) {
    let idx = dic[msg[0]];

    for (let i = idx.length - 1; i >= 0; i--) {
      if (msg.indexOf(idx[i][0]) === 0) {
        answer.push(idx[i][1]);

        cnt++;

        idx.push([msg.slice(0, idx[i][0].length + 1), cnt]);

        msg = msg.replace(idx[i][0], "");

        break;
      }
    }
  }

  return answer;
}
