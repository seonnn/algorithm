function solution(board, moves) {
  var answer = 0;
  let stack = [];

  for (let i = 0; i < moves.length; i++) {
    let doll = 0;

    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1]) {
        doll = board[j][moves[i] - 1];
        board[j][moves[i] - 1] = 0;
        break;
      }
    }

    if (!doll) continue;
    if (stack.at(-1) === doll) {
      stack.pop();
      answer += 2;
    } else {
      stack.push(doll);
    }
  }

  return answer;
}
