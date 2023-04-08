function solution(t, p) {
  let numList = [];

  for (let i = 0; i < t.length - p.length + 1; i++) {
    numList.push(t.slice(i, i + p.length));
  }

  return numList.filter((el) => +el <= +p).length;
}
