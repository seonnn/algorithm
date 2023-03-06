function solution(begin, target, words) {
  var answer = 0;

  if (!new Set(words).has(target)) return 0;

  let isVisited = new Array(words.length).fill(false);
  let queue = [[begin, 0]];

  while (queue.length) {
    let [word, cnt] = queue.shift();

    if (word === target) return cnt;

    for (let i = 0; i < words.length; i++) {
      if (isVisited[i]) continue;

      let diff = 0;

      for (let j = 0; j < words[i].length; j++) {
        if (words[i][j] !== word[j]) diff++;
      }

      if (diff === 1) {
        queue.push([words[i], cnt + 1]);
        isVisited[i] = true;
      }
    }
  }

  return answer;
}
