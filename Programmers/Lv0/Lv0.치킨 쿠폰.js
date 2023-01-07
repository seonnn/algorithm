function solution(chicken) {
  let answer = Math.floor(chicken / 10);

  let temp = answer;
  let remain = chicken % 10;

  while (temp >= 1) {
    if (remain > 9) {
      let comp = Math.floor(remain / 10);
      answer += comp;
      remain = remain % 10;
      remain += comp;
    }

    remain += temp % 10;
    temp = Math.floor(temp / 10);

    answer += temp;
  }

  return answer + Math.floor(remain / 10);
}
