function solution(babbling) {
  var answer = 0;
  let words = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < babbling.length; i++) {
    let str = babbling[i];
    for (let j = 0; j < words.length; j++) {
      let newStr = str.split(words[j]).join(" ");

      if (str.length - newStr.length > words[j].length) break;
      if (newStr.replaceAll(" ", "") === "") {
        answer++;
        break;
      }

      str = newStr;
    }
  }

  return answer;
}
