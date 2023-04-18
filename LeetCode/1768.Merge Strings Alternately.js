var mergeAlternately = function (word1, word2) {
  let answer = "";
  let len = word1.length > word2.length ? word1.length : word2.length;
  for (let i = 0; i < len; i++) {
    if (word1[i]) answer += word1[i];
    if (word2[i]) answer += word2[i];
  }
  return answer;
};
