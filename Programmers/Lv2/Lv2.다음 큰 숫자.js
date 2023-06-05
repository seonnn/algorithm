function solution(n) {
  const oneCnt = n
    .toString(2)
    .split("")
    .filter((el) => el === "1").length;
  let newOneCnt;

  while (oneCnt !== newOneCnt) {
    n += 1;
    newOneCnt = n
      .toString(2)
      .split("")
      .filter((el) => el === "1").length;
  }

  return n;
}
