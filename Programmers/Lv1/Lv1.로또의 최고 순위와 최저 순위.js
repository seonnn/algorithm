function solution(lottos, win_nums) {
  let set = new Set(win_nums);
  let match = 0;
  let miss = 0;

  for (let i = 0; i < lottos.length; i++) {
    if (set.has(lottos[i])) match++;
    if (lottos[i] === 0) miss++;
  }

  return [
    7 - match - miss === 7 ? 6 : 7 - match - miss,
    7 - match === 7 ? 6 : 7 - match,
  ];
}
