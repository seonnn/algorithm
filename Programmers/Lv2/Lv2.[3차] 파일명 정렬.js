function solution(m, musicinfos) {
  var answer = [];
  musicinfos = musicinfos.map((el) => el.split(","));
  m = replaceString(m);

  console.log(musicinfos);

  for (let i = 0; i < musicinfos.length; i++) {
    let temp = musicinfos[i];
    let playTime = getPlayTime(temp[0], temp[1]);

    temp[3] = replaceString(temp[3]);

    if (temp[3].length > playTime) {
      temp[3] = temp[3].slice(0, playTime);
    } else {
      let music = "";

      while (music.length < playTime) {
        music += temp[3];
      }

      temp[3] = music.slice(0, playTime);
    }

    if (temp[3].includes(m)) {
      answer.push([playTime, temp[2]]);
    }
  }

  return answer.length ? answer.sort((a, b) => b[0] - a[0])[0][1] : "(None)";
}

function replaceString(s) {
  s = s
    .replaceAll("C#", "c")
    .replaceAll("D#", "d")
    .replaceAll("F#", "f")
    .replaceAll("G#", "g")
    .replaceAll("A#", "a");

  return s;
}

function getPlayTime(start, end) {
  start = start.split(":");
  end = end.split(":");

  return (end[0] - start[0]) * 60 + (end[1] - start[1]);
}
