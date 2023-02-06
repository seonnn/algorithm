function solution(s, skip, index) {
  let skipSet = new Set(skip.split(""));
  let array = [];
  let answer = "";

  for (let i = 97; i <= 122; i++) {
    let str = String.fromCharCode(i);
    if (!skipSet.has(str)) array.push(str);
  }

  for (let i = 0; i < s.length; i++) {
    let idx = array.indexOf(s[i]) + index;
    while (idx >= array.length) {
      idx -= array.length;
    }
    answer += array[idx];
  }

  return answer;
}
