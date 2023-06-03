function solution(board) {
  if (board.length === 1 || board[0].length === 1) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][0] === 1) return 1;
    }
    return 0;
  }

  let max = 0;
  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      if (!board[i][j]) continue;
      let min = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]);

      board[i][j] = min + 1;
      max = Math.max(board[i][j], max);
    }
  }

  return Math.pow(max, 2);
}
