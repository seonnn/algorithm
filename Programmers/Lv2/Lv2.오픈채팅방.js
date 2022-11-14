function solution(record) {
  var answer = [];
  let nickAndId = {};

  for (i in record) {
    let [action, id, nickname] = record[i].split(" ");
    if (nickname && !nickAndId[id]) {
      nickAndId[id] = nickname;
    } else {
      if (nickname && nickAndId[id] !== nickname) nickAndId[id] = nickname;
    }
  }

  for (i in record) {
    let [action, id] = record[i].split(" ");

    if (action === "Change") continue;

    if (action === "Enter") {
      answer.push(`${nickAndId[id]}님이 들어왔습니다.`);
    } else if (action === "Leave") {
      answer.push(`${nickAndId[id]}님이 나갔습니다.`);
    }
  }

  return answer;
}
