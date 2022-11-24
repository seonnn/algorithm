// Map
function solution(n, words) {
  let playerMap = new Map();
  let wordsMap = new Map();

  for (let i = 0; i < words.length; i++) {
    let player = (i + 1) % n === 0 ? n : (i + 1) % n;

    if (playerMap.get(player)) playerMap.set(player, playerMap.get(player) + 1);
    else playerMap.set(i + 1, 1);

    if (i === 0) {
      wordsMap.set(words[i], 1);
      continue;
    }

    if (words[i - 1].at(-1) !== words[i][0] || wordsMap.get(words[i])) {
      return [player, playerMap.get(player)];
    }

    wordsMap.set(words[i], 1);
  }

  return [0, 0];
}

// Map + Set
