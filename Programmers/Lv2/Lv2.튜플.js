function solution(s) {
  var answer = [];
  let set = new Set();
  let newArr = s
    .slice(0, -2)
    .replaceAll("{", "")
    .split("},")
    .sort((a, b) => a.length - b.length);

  for (let i = 0; i < newArr.length; i++) {
    let arr = newArr[i].split(",");
    for (let j = 0; j < arr.length; j++) {
      if (set.has(+arr[j])) continue;
      else {
        set.add(+arr[j]);
        answer.push(+arr[j]);
      }
    }
  }

  return answer;
}
