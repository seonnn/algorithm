function solution(s) {
  var answer = [];
  let words = s.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let result = "";
    for (let j = 0; j < word.length; j++) {
      if (j === 0) result += word[j].toUpperCase();
      else result += word[j].toLowerCase();
    }

    answer.push(result);
  }

  return answer.join(" ");
}
