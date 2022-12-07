function solution(fees, records) {
  var answer = [];
  let recordObj = {};
  let timeObj = {};

  for (let i = 0; i < records.length; i++) {
    let [time, number, status] = records[i].split(" ");
    if (status === "IN") {
      recordObj[number] = { IN: time };
    } else {
      recordObj[number]["OUT"] = time;

      if (!timeObj[number]) timeObj[number] = [number, 0];

      timeObj[number][1] += getTime(recordObj[number]);

      delete recordObj[number];
    }
  }

  for (i in recordObj) {
    if (timeObj[i]) timeObj[i][1] += getTime(recordObj[i]);
    else timeObj[i] = [i, getTime(recordObj[i])];
  }

  let sortedTime = Object.values(timeObj).sort((a, b) => +a[0] - +b[0]);
  let [baseTime, baseFee, unit, add] = fees;

  console.log(sortedTime);

  for (let i = 0; i < sortedTime.length; i++) {
    if (sortedTime[i][1] - baseTime < 0) answer.push(baseFee);
    else
      answer.push(
        baseFee + Math.ceil((sortedTime[i][1] - baseTime) / unit) * add
      );
  }

  return answer;
}

function getTime(obj) {
  let hour, minute;
  let [inH, inM] = obj["IN"].split(":");

  if (obj["OUT"]) {
    let [outH, outM] = obj["OUT"].split(":");

    if (+outM < +inM) {
      minute = +outM + 60 - +inM;
      hour = +outH - 1 - +inH;
    } else {
      minute = +outM - +inM;
      hour = +outH - +inH;
    }
  } else {
    minute = 59 - +inM;
    hour = 23 - +inH;
  }

  return hour * 60 + minute;
}
