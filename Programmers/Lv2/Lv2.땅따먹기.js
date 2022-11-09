function solution(land) {
  for (let i = 1; i < land.length; i++) {
    for (j = 0; j < 4; j++) {
      land[i][j] += Math.max(...land[i - 1].filter((el, idx) => idx !== j));
    }
  }

  return Math.max(...land.at(-1));
}
