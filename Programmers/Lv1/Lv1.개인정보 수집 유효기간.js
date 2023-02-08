function solution(today, terms, privacies) {
  var answer = [];
  today = today.split(".").map((s) => +s);
  privacies = privacies.map((s) => s.split(" "));
  let termsObj = {};

  for (let i = 0; i < terms.length; i++) {
    let temp = terms[i].split(" ");
    termsObj[temp[0]] = +temp[1];
  }

  for (let i = 0; i < privacies.length; i++) {
    let temp = privacies[i];
    let [y, m, d] = temp[0].split(".").map((s) => +s);

    let target = getExpiration(y, m, d, termsObj[temp[1]]);

    if (today[0] > target[0]) {
      answer.push(i + 1);
      continue;
    }

    if (today[0] === target[0] && today[1] > target[1]) {
      answer.push(i + 1);
      continue;
    }

    if (
      today[0] === target[0] &&
      today[1] === target[1] &&
      today[2] > target[2]
    )
      answer.push(i + 1);
  }

  return answer;
}

function getExpiration(y, m, d, duration) {
  m = m + duration;
  d = d - 1;

  if (d === 0) {
    d = 28;
    m -= 1;
  }

  while (m > 12) {
    m -= 12;
    y += 1;
  }

  return [y, m, d];
}
