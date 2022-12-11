function solution(array) {
  var answer = 0;

  for (let i = 0; i < array.length; i++) {
    let str = String(array[i]).split("");

    for (let j = 0; j < str.length; j++) {
      if (str[j] === "7") answer++;
    }
  }

  return answer;
}

// for문 1회 사용
function solution(array) {
  var answer = 0;
  let str = array.join("");

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "7") answer++;
  }

  return answer;
}
