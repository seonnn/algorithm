function solution(m, musicinfos) {
  var answer = [];
  musicinfos = musicinfos
    .map((el) => el.split(","))
    .map((el) => [...el.slice(0, 3), replaceString(el[3], m.length)]);
  m = replaceString(m, 0);

  for (let i = 0; i < musicinfos.length; i++) {
    let temp = musicinfos[i];
    if (temp[3].includes(m)) {
      let time = getPlayTime(temp[0], temp[1]);

      answer.push([time, temp[2]]);
    }
  }

  return answer.length ? answer.sort((a, b) => b[0] - a[0])[0][1] : "(None)";
}

function replaceString(s, len) {
  s = s
    .replaceAll("C#", "c")
    .replaceAll("D#", "d")
    .replaceAll("F#", "f")
    .replaceAll("G#", "g")
    .replaceAll("A#", "a");

  while (s.length < len * 2) {
    s += s;
  }

  return s;
}

function getPlayTime(start, end) {
  start = start.split(":").map((el) => +el);
  end = end.split(":").map((el) => +el);

  if (start[1] > end[1]) {
    return (end[0] - 1 - start[0]) * 60 + (end[1] + 60 - start[1]);
  } else {
    return (end[0] - start[0]) * 60 + (end[1] - start[1]);
  }
}
