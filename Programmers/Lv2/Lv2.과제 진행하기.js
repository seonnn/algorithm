function solution(plans) {
  var answer = [];
  plans.sort((a, b) => +a[1].replace(":", "") - +b[1].replace(":", ""));
  let gap = Array(plans.length - 1).fill(0);

  for (let i = 0; i < plans.length - 1; i++) {
    gap[i] = getTimeGap(plans[i][1], plans[i + 1][1]);
  }

  gap.push(+plans[plans.length - 1][2]);

  let stopped = [];

  for (let i = 0; i < plans.length; i++) {
    if (+plans[i][2] === gap[i]) {
      answer.push(plans[i][0]);
      continue;
    }

    if (+plans[i][2] > gap[i]) {
      plans[i][2] = +plans[i][2] - gap[i];
      stopped.push(plans[i]);
      continue;
    }

    if (+plans[i][2] < gap[i]) {
      answer.push(plans[i][0]);

      if (!stopped.length) continue;

      let leftTime = gap[i] - +plans[i][2];

      while (leftTime > 0) {
        if (!stopped.length) break;

        if (+stopped[stopped.length - 1][2] > leftTime) {
          stopped[stopped.length - 1][2] = +stopped[stopped.length - 1][2] - leftTime;
          break;
        } else {
          leftTime = leftTime - +stopped[stopped.length - 1][2];
          answer.push(stopped[stopped.length - 1][0]);
          stopped.pop();
        }
      }
    }
  }

  for (let i = stopped.length - 1; i >= 0; i--) {
    answer.push(stopped[i][0]);
  }

  return answer;
}

function getTimeGap(time1, time2) {
  let [h1, m1] = time1.split(":").map(Number);
  let [h2, m2] = time2.split(":").map(Number);

  let hGap = m2 - m1 > 0 ? h2 - h1 : h2 - h1 - 1;
  let mGap = m2 - m1 > 0 ? m2 - m1 : m2 + 60 - m1;

  return hGap * 60 + mGap;
}
