function solution(want, number, discount) {
  var answer = 0;
  const obj = {};

  for (let i = 0; i < want.length; i++) {
    obj[want[i]] = number[i];
  }

  let temp = { ...obj };
  let pointer = 0;

  while (pointer < discount.length - 9) {
    for (let i = 0; i < 10; i++) {
      let item = discount[pointer + i];
      if (temp[item]) {
        temp[item] -= 1;
      }
    }

    if (Object.values(temp).filter((n) => n > 0).length === 0) answer++;
    temp = { ...obj };
    pointer++;
  }

  return answer;
}
