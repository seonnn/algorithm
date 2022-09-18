function solution(s) {
  var answer = [];
  let words = s.split(" ");

  for (let i = 0; i < words.length; i++) {
    let res = "";
    let temp = words[i];
    for (let j = 0; j < temp.length; j++) {
      if (j === 2 || j % 2 === 0) res += temp[j].toUpperCase();
      else res += temp[j].toLowerCase();
    }
    answer.push(res);
  }
  return answer.join(" ");
}
